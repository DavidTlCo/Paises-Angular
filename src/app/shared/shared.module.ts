import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule //Usign the RouterModule configured and exported in AppRoutingModule to the main routes
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
