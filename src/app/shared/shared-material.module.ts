import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatFormField,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedMaterialModule {}
