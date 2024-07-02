export class UserDto {
  constructor(private _userId: string) {}

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }
}
