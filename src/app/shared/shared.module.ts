import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent, 
    FooterComponent  
  ],
  exports: [
    HeaderComponent, 
    FooterComponent  
  ]
})
export class SharedModule { }
