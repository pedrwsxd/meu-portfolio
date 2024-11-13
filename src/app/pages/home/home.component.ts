import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeComponent {
 faInstagram = faInstagram;
 faLinkedin = faLinkedin;
 faGithub = faGithub;
 faWhatsapp = faWhatsapp;
}
