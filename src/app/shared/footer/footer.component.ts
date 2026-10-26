import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly hours = [
    { day: 'Terça a sexta', time: '18h–23h' },
    { day: 'Sábado', time: '12h–23h30' },
    { day: 'Domingo', time: '12h–17h' },
    { day: 'Segunda', time: 'Fechado' }
  ];
}
