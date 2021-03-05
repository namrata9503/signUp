import { AbstractControl } from '@angular/forms';

export function ConfirmedValidator(
  password: string,
  fname: string,
  lname: string
): any {
  return (controls: AbstractControl) => {
    const first = controls.get(fname);
    const last = controls.get(lname);
    const pwd = controls.get(password);
    if ('' !== pwd?.value && '' !== first?.value && '' !== last?.value) {
      if (
        pwd?.value.includes(first?.value) ||
        pwd?.value.includes(last?.value)
      ) {
        return pwd?.setErrors({ confirmedValidator: true });
      }
    }
  };
}
