import { inject, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ErrorComponent } from "@core/components/error/error.component";
import { TemplateComponent } from "@core/components/template/template.component";
import { UsersComponent } from "@core/components/users/users.component";
import { RouterPaths } from "@router/models/router.models";






/** */
const routes: Routes = [
  { path: "", redirectTo: RouterPaths.DASHBOARD, pathMatch: "full" },
 // RouterModule.forRoot([{ path: 'error/:code', component: ErrorComponent }]),
 {path:"users" , component:UsersComponent},
 // {path:"demandeRh" , component:DemandeRhComponent},
  {
    path: "",
    component: TemplateComponent,
   // canActivate: [() => inject(AuthGuardGuard).canActivate()],
   // canActivateChild: [() => inject(AuthGuardGuard).canActivate()],
    children: [
      {
        path: RouterPaths.DASHBOARD,
        loadChildren: () =>
          import("./features/home/home.module").then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
