import { NgModule } from "@angular/core";
import { TemplateComponent } from "@core/components/template/template.component";
import { HeaderModule } from "@core/components/header/header.module";
import { RouterModule } from "@angular/router";
import { SidebarModule } from "../sidebar/sidebar.module";



@NgModule({
  declarations: [TemplateComponent],
  imports: [RouterModule, HeaderModule, SidebarModule],
  exports: [],
})
export class TemplateModule {}
