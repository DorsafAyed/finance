import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


import { environment } from "@environments/environment";

import { NgxsModule } from "@ngxs/store";

import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  exports: [CommonModule],
  providers: [
   
  ],
})
export class SharedModule {}
