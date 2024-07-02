import { Injectable } from "@angular/core";
import { User } from "@models/user.model";


@Injectable({
  providedIn: "root",
})
export class UserMapper {
  dtoToModel(dto: UserDto): User {
    if (!dto) {
      throw new Error("Unable run the mapping");
    }
    return {
      userId: dto.userId,
    };
  }
}
