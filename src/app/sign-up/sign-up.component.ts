import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Data } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { passwordValidator } from '@app-shared/PasswordValidator';
import { PostUserService } from '@app-services/post-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Input() user = { firstName: '', lastName: '', password: '', email: '' };
  form: FormGroup = new FormGroup({});
  errorMessage?: boolean;
  submitted = false;
  loading = false;
  updateMessage?: string;
  formGroup?: FormGroup;

  constructor(
    private postUsers: PostUserService,
    private formBuilder: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formValidation();
  }

  get findError(): Data {
    return this.form.controls;
  }

  formValidation = (): void => {
    this.form = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/
            ),
          ],
        ],
        password: [
          '',
          [
            Validators.minLength(8),
            Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])/),
            Validators.required,
          ],
        ],
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        validator: passwordValidator('password', 'firstName', 'lastName'),
      }
    );
  };

  postUser = (data: Data): void => {
    this.submitted = true;
    if (!this.form.invalid) {
      this.loading = true;
      console.log(`Submitting request with ${String(data.email)} account.`);
      this.postUsers.postUser(this.user).subscribe(
        (res) => {
          console.log(
            `Success response with Http status ${String(res.status)}`
          );
          this.handleSuccess();
        },
        (error: Error) => {
          this.loading = true;
          this.handleError(error);
        }
      );
    }
  };
  refreshPage = (): void => {
    this.document.location.reload();
  };

  private handleError = (error: Error): void => {
    this.submitted = false;
    this.loading = false;
    this.errorMessage = true;
    this.updateMessage =
      'Something went wrong on server.. Please try again later..!!!';
    console.error(`Error message: ', ${String(error)}`);
    this.form.reset();
  };

  private handleSuccess = (): void => {
    this.loading = false;
    if (!this.form.invalid) {
      this.router.navigateByUrl('/thanks');
    }
  };
}
