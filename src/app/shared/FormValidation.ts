/* eslint-disable @typescript-eslint/unbound-method */
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { passwordValidator } from '@app-shared/PasswordValidator';

export class FormValidation {
 // form: FormGroup = new FormGroup({});
  formGroup?: FormGroup;
  constructor(private formBuilder: FormBuilder, private form: FormGroup) {}

  public formValidation = (): any => {
    console.log('form***********', this.form.value);
    // this.form = this.formBuilder.group(
    //   {
    //     firstName: ['', [Validators.required]],
    //     lastName: ['', [Validators.required]],
    //     email: [
    //       '',
    //       [
    //         Validators.required,
    //         Validators.pattern(
    //           /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/
    //         ),
    //       ],
    //     ],
    //     password: [
    //       '',
    //       [
    //         Validators.minLength(8),
    //         Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])/),
    //         Validators.required
    //       ],
    //     ],
    //   },
    //   {
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    //     validator: passwordValidator('password', 'firstName', 'lastName'),
    //   }
    // );
    console.log('fo---------------------rm***********', this.form.value);
  };
}
