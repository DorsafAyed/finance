import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserSessionState, UserSessionStateModel } from '@store/user-session/user-session.state'; 
@Component({
  selector: 'mtc-sidebar',
 
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
 
 
 
  errorMsg: Array<string> = [];
  roles: string[];
 // roles: string[];

  constructor(
    private store: Store ,private userSessionState: UserSessionState
  ) {
  }

  async ngOnInit(): Promise<void>  {
this.roles = this.store.selectSnapshot(UserSessionState.roles);

  }

 
}
