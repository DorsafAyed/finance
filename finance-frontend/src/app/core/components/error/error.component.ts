import { Component, Input } from '@angular/core';
import { HeaderModule } from '@core/components/header/header.module';

import { SidebarModule } from '@core/components/sidebar/sidebar.module';
import { CommonModule } from '@angular/common';
import { catchError, throwError } from 'rxjs';
import { TemplateComponent } from '../template/template.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'mtc-error',
  standalone: true,
  imports: [HeaderModule, SidebarModule,CommonModule,RouterModule],
  
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {
  @Input() errorCode: number;
  @Input() errorMessage: string;
  showError(message: string) {
    // Display the error message here.
  }
}
