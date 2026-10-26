import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface Stat {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: 'bag' | 'coin' | 'calendar' | 'users';
}

interface RevenueDay {
  day: string;
  value: number;
}

type OrderStatus = 'Em preparo' | 'Pronto' | 'Entregue';

interface Order {
  table: string;
  customer: string;
  items: string;
  status: OrderStatus;
  value: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long'
  });

  readonly stats: Stat[] = [
    { label: 'Pedidos hoje', value: '128', trend: '+12% vs. ontem', trendUp: true, icon: 'bag' },
    { label: 'Receita do dia', value: 'R$ 8.450', trend: '+8% vs. ontem', trendUp: true, icon: 'coin' },
    { label: 'Reservas ativas', value: '24', trend: '6 para hoje à noite', trendUp: true, icon: 'calendar' },
    { label: 'Novos clientes', value: '16', trend: '-3% vs. semana passada', trendUp: false, icon: 'users' }
  ];

  readonly revenue: RevenueDay[] = [
    { day: 'Seg', value: 42 },
    { day: 'Ter', value: 58 },
    { day: 'Qua', value: 51 },
    { day: 'Qui', value: 66 },
    { day: 'Sex', value: 84 },
    { day: 'Sáb', value: 96 },
    { day: 'Dom', value: 72 }
  ];

  readonly maxRevenue = Math.max(...this.revenue.map((r) => r.value));

  readonly orders: Order[] = [
    { table: 'Mesa 4', customer: 'Luiza Ferraz', items: 'Risoto de funghi, Tiramisù', status: 'Em preparo', value: 'R$ 100' },
    { table: 'Mesa 9', customer: 'Renato Assis', items: 'Filé ao Porto, Água com gás', status: 'Pronto', value: 'R$ 108' },
    { table: 'Mesa 2', customer: 'Camila Duarte', items: 'Polvo em brasa, Vinho tinto', status: 'Entregue', value: 'R$ 142' },
    { table: 'Mesa 7', customer: 'João Meireles', items: 'Cordeiro em crosta, Torta de maçã', status: 'Em preparo', value: 'R$ 132' },
    { table: 'Mesa 1', customer: 'Bianca Otero', items: 'Robalo grelhado, Suco natural', status: 'Pronto', value: 'R$ 98' },
    { table: 'Mesa 12', customer: 'Diego Salomão', items: 'Risoto de funghi, Espresso', status: 'Entregue', value: 'R$ 76' }
  ];

  statusClass(status: OrderStatus): string {
    switch (status) {
      case 'Em preparo':
        return 'badge--brass';
      case 'Pronto':
        return 'badge--forest';
      default:
        return 'badge--stone';
    }
  }
}
