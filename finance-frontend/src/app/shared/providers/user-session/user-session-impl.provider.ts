import { Inject, Injectable } from "@angular/core";
import { UserSessionProvider } from "@services/user-session/user-session.provider";
import {
  API_URL_SERVICE_IMPL,
  ApiUrlService,
} from "@services/api/api-url.service";
import {
  HTTP_API_PROVIDER_IMPL,
  HttpApiProvider,
} from "@provider/http/http-api.provider";
import { Observable } from "rxjs";
import { User } from "@models/user.model";
import { UserMapper } from "@mapper/user.mapper";
import { UserDto } from "@dto/user/user.dto";

@Injectable()
export class UserSessionImplProvider implements UserSessionProvider {
  constructor(
    private userMapper: UserMapper,
    @Inject(HTTP_API_PROVIDER_IMPL) private httpApiProvider: HttpApiProvider,
    @Inject(API_URL_SERVICE_IMPL) private apiUrlService: ApiUrlService
  ) {}

  getUser(): Observable<User> {
    let mapperFn = this.userMapper.dtoToModel.bind(this);
    return this.httpApiProvider.get<UserDto, User>(
      this.apiUrlService.userApi(),
      mapperFn
    );
  }
}
