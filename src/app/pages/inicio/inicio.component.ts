import { Component } from '@angular/core';
import { ContatoComponent } from '../contato/contato.component';
import { HomeComponent } from '../home/home.component';
import { SobreComponent } from '../sobre/sobre.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjetosComponent } from '../projetos/projetos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ContatoComponent, HomeComponent, SobreComponent, SkillsComponent, ProjetosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
