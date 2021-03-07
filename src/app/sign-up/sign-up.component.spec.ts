/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [SignUpComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component: SignUp Validation', () => {
    it('form invalid when empty', () => {
      expect(component.form.valid).toBeFalsy();
    });

    it('FirstName field validity', () => {
      let errors = {};
      const firstName = component.form.controls.firstName;
      expect(firstName.valid).toBeFalsy();

      // firstName field is required
      errors = firstName.errors || {};
      firstName.setValue('');
      expect(firstName.hasError('required')).toBeTruthy();
    });
    it('LastName field validity', () => {
      let errors = {};
      const lastName = component.form.controls.lastName;
      expect(lastName.valid).toBeFalsy();

      // lastName field is required
      errors = lastName.errors || {};
      lastName.setValue('');
      expect(lastName.hasError('required')).toBeTruthy();
    });
    it('Email field validity', () => {
      let errors = {};
      const email = component.form.controls.email;
      expect(email.valid).toBeFalsy();

      // // email field is required
      errors = email.errors || {};
      expect(email.hasError('required')).toBeTruthy();

      // Set email to something
      email.setValue('test');
      errors = email.errors || {};
      expect(email.hasError('required')).toBeFalsy();
      expect(email.hasError('pattern')).toBeTruthy();

      // Set email to something correct
      email.setValue('test@example.com');
      errors = email.errors || {};
      expect(email.hasError('required')).toBeFalsy();
      expect(email.hasError('pattern')).toBeFalsy();
    });
    it('password field validity', () => {
      let errors = {};
      const password = component.form.controls.password;
      expect(password.valid).toBeFalsy();

      password.setValue('');
      expect(password.hasError('required')).toBeTruthy();

      // Set password to invalid minlength
      password.setValue('Minpass');
      errors = password.errors || {};
      expect(password.hasError('minlength')).toBeTruthy();

      // Set password to something correct
      password.setValue('Supersecret12');
      errors = password.errors || {};
      expect(password.valid).toBeTruthy();
    });
    it('should call onSubmit method', () => {
      spyOn(component, 'postUser');
      el = fixture.debugElement.query(By.css('button')).nativeElement;
      el.click();
      expect(el).toBeTruthy();
    });
  });
});
