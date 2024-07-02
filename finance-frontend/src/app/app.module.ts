import { APP_INITIALIZER, ErrorHandler, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "./shared/shared.module";
import { HeaderModule } from "@core/components/header/header.module";
import { environment } from "@environments/environment";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpHeadersInterceptor } from "./shared/interceptors/http-headers.interceptor";
import { KeycloakService } from "@services/keycloak.service";

import { HeaderComponent } from "@core/components/header/header.component";
import { SidebarComponent } from "@core/components/sidebar/sidebar.component";
import { CustomErrorHandlerService } from "@services/custom-error-handler.service";
import { ErrorComponent

 } from "@core/components/error/error.component";
import { ErrorInterceptor } from "./shared/interceptors/error.interceptor";
import { RouterModule } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { UserSessionState } from "@store/user-session/user-session.state";
/*const appInitializerFn = (appConfig: ApplicationConfigService) => {
  return () => {
    return appConfig.loadAppConfig(
      environment.applicationConfigFile.toString()
    );
  };
};*/

export function KcFactory(kcService : KeycloakService)
{
  return () => kcService.init();
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HeaderModule,
    SharedModule,
    HttpClientModule,
  
    ErrorComponent,
    NgxsModule.forRoot([
   UserSessionState
    ]),

RouterModule.forRoot([{path: 'error/:code', component: ErrorComponent}])
  
    
  ],
  providers: [

 { provide: ErrorHandler, useClass: CustomErrorHandlerService },
    {
      provide: APP_INITIALIZER,
    deps :[KeycloakService],
 useFactory: KcFactory,
multi: true
     /* useFactory: appInitializerFn,
      multi: true,
      deps: [ApplicationConfigService],*/
   },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    ErrorComponent
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
