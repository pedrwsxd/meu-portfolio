import {
  faArrowDown,
  faCrown,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuOpen = false;
  
  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  faUser = faUser;
  faCrown = faCrown;
  faArrowDown = faArrowDown;
  menuVisible:
    | string
    | string[]
    | Set<string>
    | { [klass: string]: any }
    | null
    | undefined;

  constructor(private router: Router) {
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
