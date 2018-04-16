import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

export class ShowOnSubmitted implements ErrorStateMatcher {
    isErrorState(control: FormControl, formGroup: FormGroupDirective): boolean {
        return formGroup.submitted && control.invalid;
    }
}
