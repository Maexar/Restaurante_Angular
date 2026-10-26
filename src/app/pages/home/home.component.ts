import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface DailyItem {
  name: string;
  price: string;
}

interface Pillar {
  title: string;
  text: string;
  icon: 'leaf' | 'flame' | 'hand';
}

interface FeaturedDish {
  name: string;
  category: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly dailyMenu: DailyItem[] = [
    { name: 'Risoto de funghi e ervas', price: '68' },
    { name: 'Filé ao molho de vinho do Porto', price: '92' },
    { name: 'Robalo grelhado com aspargos', price: '86' },
    { name: 'Tiramisù da casa', price: '32' }
  ];

  readonly pillars: Pillar[] = [
    {
      title: 'Ingredientes de estação',
      text: 'Compramos direto de produtores locais toda semana, o que define o cardápio antes de qualquer outra coisa.',
      icon: 'leaf'
    },
    {
      title: 'Técnica apurada',
      text: 'Cada prato passa por um processo pensado à mesa: cocções longas, temperos precisos, nada deixado ao acaso.',
      icon: 'flame'
    },
    {
      title: 'Hospitalidade genuína',
      text: 'Uma equipe pequena e atenta, que lembra do seu nome e do jeito que você gosta do seu prato.',
      icon: 'hand'
    }
  ];

  readonly featured: FeaturedDish[] = [
    {
      name: 'Polvo em brasa',
      category: 'Entrada',
      description: 'Grelhado lentamente com purê de batata defumada e azeite de ervas.',
      price: '58'
    },
    {
      name: 'Cordeiro em crosta de ervas',
      category: 'Prato principal',
      description: 'Servido com risoto de beterraba e redução de vinho tinto.',
      price: '98'
    },
    {
      name: 'Torta de maçã quente',
      category: 'Sobremesa',
      description: 'Massa amanteigada, canela e sorvete de baunilha feito na casa.',
      price: '34'
    }
  ];
}
