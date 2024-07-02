import { NgModule } from "@angular/core";
import { HeaderComponent } from "@core/components/header/header.component";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "@core/components/header/logo/logo.component";
import { VersionComponent } from "@core/components/header/version/version.component";

import { ToggleButtonComponent } from "@core/components/header/toggle-button/toggle-button.component";
import { HeaderButtonComponent } from "@core/components/header/header-button/header-button.component";
import { UserProfileButton } from "@core/components/header/user-profile-button/user-profile-button.component";

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    VersionComponent,

    UserProfileButton,
    ToggleButtonComponent,
    HeaderButtonComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
