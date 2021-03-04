import { FormBuilder, FormGroup } from '@angular/forms';

export function ConfirmedValidator(
  password: string,
  fname: string,
  lname: string
): any {
  return (formGroup: FormGroup) => {
    const first = formGroup.controls[fname];
    const last = formGroup.controls[lname];
    const pwd = formGroup.controls[password];
    if ('' !== pwd.value && '' !== first.value && '' !== last.value) {
      if (pwd.value.includes(first.value) || pwd.value.includes(last.value)) {
        pwd.setErrors({ confirmedValidator: true });
      } else {
        pwd.setErrors(null);
      }
    }
  };
}
