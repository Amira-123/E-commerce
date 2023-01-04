import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule


  ],
  exports:[
    HeaderComponent,
    BrowserModule,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
