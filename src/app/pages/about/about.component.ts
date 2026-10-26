import { Component } from '@angular/core';

interface Value {
  title: string;
  text: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly values: Value[] = [
    { title: 'Origem', text: 'Nascemos de uma cozinha de família e crescemos sem perder o gosto de comida feita com cuidado.' },
    { title: 'Produtores', text: 'Trabalhamos com cerca de 20 pequenos produtores da região metropolitana de Curitiba.' },
    { title: 'Equipe', text: 'Uma brigada enxuta de 9 pessoas, a maior parte com a casa desde a abertura.' }
  ];

  readonly hours = [
    { day: 'Terça a sexta', time: '18h–23h' },
    { day: 'Sábado', time: '12h–23h30' },
    { day: 'Domingo', time: '12h–17h' },
    { day: 'Segunda', time: 'Fechado' }
  ];
}
