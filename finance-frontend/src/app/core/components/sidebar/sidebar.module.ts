import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from "@core/components/template/template.component";
import { HeaderModule } from "@core/components/header/header.module";
import { RouterModule } from "@angular/router";

import { SidebarComponent } from "../sidebar/sidebar.component";
import { UsersComponent } from '../users/users.component';



@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [
    CommonModule,RouterModule, HeaderModule, UsersComponent
  ]
})
export class SidebarModule { }
