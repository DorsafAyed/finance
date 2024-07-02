import { Injectable } from "@angular/core";
import { ApiUrlService } from "./api-url.service";
import { ApplicationConfigService } from "../config/application-config.service";

@Injectable()
export class ApiUrlImplService implements ApiUrlService {
  constructor(private applicationConfigService: ApplicationConfigService) {}

  apiBase(): string {
    return (
      this.applicationConfigService.getBackendApiHostname() + "/api/http/ui/v1"
    );
  }
  loginApiBase(): string {
    return (
      this.applicationConfigService.getBackendApiHostname() + "/api/http/ui"
    );
  }
  loginApi(): string {
    return this.loginApiBase() + "/auth/login";
  }
  userApi(): string {
    return this.apiBase() + "/users";
  }
}
