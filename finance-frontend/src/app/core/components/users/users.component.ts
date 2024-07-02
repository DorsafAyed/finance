import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { BackendService } from '@services/backend.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '@models/user';
import { KeycloakService } from '@services/keycloak.service';

@Component({
  selector: 'mtc-users',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,HeaderModule, SidebarModule ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  @Select(state => state.userSession.user) user$: Observable<User>; // Assuming user session state structure
  isAdmin: boolean = false;
  users: any[] = [];
  newUser: any = {}; 
  showAddRow: boolean = false;
  constructor(private backendService: BackendService ,private keycloakService: KeycloakService, private store: Store) {}

  ngOnInit(): void {
    this.isAdmin = this.keycloakService.hasAdminRole();
    if (this.isAdmin) {
      this.loadUsers();
    }
  }
// Inside UsersComponent class
hasAdminRole(user: User): boolean {
  return user && user.roles && user.roles.includes('admin_fn');
}

  loadUsers(): void {
    this.backendService.getListUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  addNewRow(): void {
    this.showAddRow = true;
    this.newUser = {}; // Clear new user object
  }

  saveUser(): void {
    // Call backend service to save the new user
    this.backendService.addUser(this.newUser).subscribe({
      next: (response) => {
        console.log('User added successfully:', response);
        this.users.push(response); // Add the new user to the list
        this.showAddRow = false; // Hide the add row section
      },
      error: (err) => {
        console.error('Error adding user:', err);
        // Handle error, e.g., show error message to user
      }
    });
  }

  cancelAdd(): void {
    this.showAddRow = false;
    this.newUser = {}; // Clear new user object
  }

  deleteUser(index: number): void {
    // Implement logic to delete user from backend and update UI
    const userIdToDelete = this.users[index].id; // Adjust as per your user object structure
    this.backendService.deleteUser(userIdToDelete).subscribe({
      next: () => {
        console.log('User deleted successfully');
        this.users.splice(index, 1); // Remove user from UI array
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        // Handle error, e.g., show error message to user
      }
    });
  }
}