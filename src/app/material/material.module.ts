import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule, 
    MatNativeDateModule
  ]
})
export class MaterialModule { }
