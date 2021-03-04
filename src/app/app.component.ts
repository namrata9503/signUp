import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Input, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmedValidator } from './shared/PasswordValidator';
import { PostUserService } from './services/post-user.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabled = false;
  form: FormGroup = new FormGroup({});
  errorMessage: boolean | undefined;
  submitted = false;
  loading = false;
  updateMessage: string | undefined;
  @Input() userObj = { fname: '', lname: '', password: '', email: '' };


  constructor(private formBuilder: FormBuilder,
    private postUsers: PostUserService,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)]],
      password: ['', [Validators.minLength(8),
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/),
      Validators.required]]
    }, {
      validator: ConfirmedValidator('password', 'fname', 'lname')
    })
  }

  get f() { return this.form.controls; }

  postUser(data: any) {
    this.loading = true;
    this.isDisabled = true;

    this.postUsers.postUser(this.userObj).subscribe((data: any) => {
      console.log("success", data);
      this.updateMessage = "Data added successfully..!!!";
      const button = this.renderer.createElement('button');
      const buttonText = this.renderer.createText('Sign Up User');
      this.renderer.appendChild(button, buttonText);
      button.classList.add("btn__signup");
      this.renderer.appendChild(this.el.nativeElement, button);
      this.renderer.listen(button, 'click', () => {
        this._document.location.reload();
      });
      this.submitted = true;
      this.loading = false;

    },
      (error: any) => {
        this.loading = false;

        this.errorMessage = true;
        this.updateMessage = "Something went wrong on server.. Please try again later..!!!";
        console.error('error caught in component', error)
        this.form.reset();
      });

  }
  refreshPage() {
    this._document.location.reload();
  }
}



