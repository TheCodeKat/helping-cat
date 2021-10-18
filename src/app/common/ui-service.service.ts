import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { NameDialogComponent } from '../name-dialog/name-dialog.component';
import { SimpleDialogComponent } from './simple-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  showSnackbar(message: string, action = 'Close', config?: MatSnackBarConfig) {
    this.snackBar.open(message, action, config || { duration: 7000 })
  }

  showDialog(
    title: string,
    content: string,
    okText = 'OK',
    cancelText?: string,
    customConfig?: MatDialogConfig
  ): Observable<boolean> {
    const dialogRef = this.dialog.open(
      SimpleDialogComponent,
      customConfig || {
        width: '300px',
        data: { title, content, okText, cancelText },
      }
    )
    return dialogRef.afterClosed()
  }

  showNameDialog(): Observable<string> {
    const dialogRef = this.dialog.open(
      NameDialogComponent,
      {
        width: '300px',
        data: {name: ''}
      }
    )
    return dialogRef.afterClosed()
  }
}
