/* eslint-disable @typescript-eslint/unbound-method */

import {
  Component,
  OnInit,
  Inject,
  Input,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { passwordValidator } from './shared/PasswordValidator';
import { PostUserService } from './services/post-user.service';
import { DOCUMENT } from '@angular/common';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() user = { firstName: '', lastName: '', password: '', email: '' };
  isDisabled = false;
  form: FormGroup = new FormGroup({});
  errorMessage: boolean | undefined;
  submitted = false;
  loading = false;
  updateMessage: string | undefined;
  formGroup: FormGroup | undefined;

  constructor(
    private postUsers: PostUserService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
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
            Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/),
            Validators.required,
          ],
        ],
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        validator: passwordValidator('password', 'firstName', 'lastName'),
      }
    );
  }

  get findError(): any {
    return this.form.controls;
  }

  postUser(data: Data): void {
    this.loading = true;
    this.isDisabled = true;

    console.log(data);

    this.postUsers.postUser(this.user).subscribe(
      (userResponse: Response) => {
        console.log(userResponse);
        this.handleSuccess();
      },
      (error: Error) => {
        this.handleError(error);
      }
    );
  }
  refreshPage(): void {
    this.document.location.reload();
  }

  private handleError(error: Error): void {
    this.loading = false;
    this.errorMessage = true;
    this.updateMessage =
      'Something went wrong on server.. Please try again later..!!!';
    console.error('error caught in component', error);
    this.form.reset();
  }

  private signUpButton(): void {
    const button = this.renderer.createElement('button');
    const buttonText = this.renderer.createText('Sign Up User');
    this.renderer.appendChild(button, buttonText);
    button.classList.add('btn__signup');
    this.renderer.appendChild(this.el.nativeElement, button);
    this.renderer.listen(button, 'click', () => {
      this.document.location.reload();
    });
  }

  private handleSuccess(): void {
    console.log('Preparing post success activity');
    this.updateMessage = 'Data added successfully..!!!';
    this.submitted = true;
    this.loading = false;
    this.signUpButton();
  }
}
