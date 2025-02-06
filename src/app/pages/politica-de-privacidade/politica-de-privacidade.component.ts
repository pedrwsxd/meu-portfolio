import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-politica-de-privacidade',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './politica-de-privacidade.component.html',
  styleUrl: './politica-de-privacidade.component.css'
})
export class PoliticaDePrivacidadeComponent {

}
