/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  HttpClientTestingModule, } from '@angular/common/http/testing';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Component: SignUp Validation', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [SignUpComponent],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(SignUpComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

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

    // email field is required
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

    // Set password to something
    password.setValue('E123456');
    errors = password.errors || {};
    expect(password.hasError('minlength')).toBeTruthy();

    // Set password to something correct
    password.setValue('Ess12345678');
    errors = password.errors || {};
    expect(password.valid).toBeTruthy();
  });

});
