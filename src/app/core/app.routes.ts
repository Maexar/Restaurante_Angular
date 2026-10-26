import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { MenuComponent } from '../pages/menu/menu.component';
import { ReservationsComponent } from '../pages/reservations/reservations.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Âmbar — Alta gastronomia com alma' },
  { path: 'dashboard', component: DashboardComponent, title: 'Âmbar — Painel' },
  { path: 'menu', component: MenuComponent, title: 'Âmbar — Menu' },
  { path: 'reservas', component: ReservationsComponent, title: 'Âmbar — Reservas' },
  { path: 'sobre', component: AboutComponent, title: 'Âmbar — Sobre' },
  { path: 'contato', component: ContactComponent, title: 'Âmbar — Contato' },
  { path: '**', redirectTo: '' }
];
