import { Routes } from '@angular/router';
import { PoliticaDePrivacidadeComponent } from './pages/politica-de-privacidade/politica-de-privacidade.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TermosDeUsoComponent } from './pages/termos-de-uso/termos-de-uso.component';

export const routes: Routes = [
    {
        path: 'politica-de-privacidade',
        component: PoliticaDePrivacidadeComponent
    },
    {
        path: 'termos-de-uso',
        component: TermosDeUsoComponent
    },
    {
        path: '',
        component: InicioComponent
    }
];


