import { AbstractControl } from '@angular/forms';
import { Data } from '@angular/router';

export const passwordValidator = (
  password: string,
  firstName: string,
  lastName: string
): Data => (controls: AbstractControl) => {
  const first = controls.get(firstName);
  const last = controls.get(lastName);
  const pwd = controls.get(password);

  if (
    ('' !== first?.value && (typeof (pwd?.value) == 'string' && pwd?.value.includes(first?.value))) ||
    ('' !== last?.value && (typeof (pwd?.value) == 'string' && pwd?.value.includes(last?.value)))
  ) {
    return pwd?.setErrors({ passwordValidator: true });
  }
};
