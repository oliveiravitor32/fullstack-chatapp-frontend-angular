import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  exports: [MatInputModule, MatButtonModule, MatFormField, ReactiveFormsModule],
})
export class SharedMaterialModule {}
