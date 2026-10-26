import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen = signal(false);

  readonly links = [
    { path: '/', label: 'Início' },
    { path: '/menu', label: 'Menu' },
    { path: '/reservas', label: 'Reservas' },
    { path: '/dashboard', label: 'Painel' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' }
  ];

  toggle(): void {
    this.isOpen.update((v) => !v);
  }

  close(): void {
    this.isOpen.set(false);
  }
}
