import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContatoComponent } from './pages/contato/contato.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, HomeComponent, ProjetosComponent, SobreComponent, SkillsComponent, FooterComponent, ContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-portfolio';
}
