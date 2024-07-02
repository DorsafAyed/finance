import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page.component";
import { NgModule } from "@angular/core";
import { UsersComponent } from "@core/components/users/users.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "users",
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
