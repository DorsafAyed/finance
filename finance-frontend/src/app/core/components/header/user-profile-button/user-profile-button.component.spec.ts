import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserProfileButton } from "./user-profile-component-button.component";

describe("UserProfileComponent", () => {
  let component: UserProfileButton;
  let fixture: ComponentFixture<UserProfileButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileButton],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
