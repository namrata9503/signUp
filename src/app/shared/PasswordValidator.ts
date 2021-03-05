import { AbstractControl } from '@angular/forms';

export const passwordValidator = (
  password: string,
  firstName: string,
  lastName: string
): any => (controls: AbstractControl) => {
  const first = controls.get(firstName);
  const last = controls.get(lastName);
  const pwd = controls.get(password);

  if ('' !== pwd?.value && '' !== first?.value && '' !== last?.value) {
    if (pwd?.value.includes(first?.value) || pwd?.value.includes(last?.value)) {
      return pwd?.setErrors({ confirmedValidator: true });
    }
  }
};
