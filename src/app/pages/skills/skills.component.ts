import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faAws, faFigma, faFlutter, faJava } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
    faAngular = faAngular;
    faJava = faJava;
    faAws = faAws;
    faFigma = faFigma;
    faFlutter = faFlutter;
}
