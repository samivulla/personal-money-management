import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialog {
    message;
    constructor(@Inject(MAT_DIALOG_DATA) data, private dialog: MatDialogRef<ConfirmDialog>) {
        this.message = data.customMessage;
    }
    closeDialog() {
        this.dialog.close();
    }
}
