import { Component, computed, signal } from '@angular/core';

type Category = 'Entradas' | 'Principais' | 'Sobremesas' | 'Bebidas';
type DietTag = 'vegetariano' | 'vegano' | 'sem-gluten';

interface Dish {
  name: string;
  description: string;
  price: string;
  category: Category;
  tags?: DietTag[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  readonly categories: Array<Category | 'Todos'> = ['Todos', 'Entradas', 'Principais', 'Sobremesas', 'Bebidas'];
  readonly active = signal<Category | 'Todos'>('Todos');

  readonly dishes: Dish[] = [
    { name: 'Polvo em brasa', description: 'Purê de batata defumada, azeite de ervas e páprica.', price: '58', category: 'Entradas', tags: ['sem-gluten'] },
    { name: 'Burrata com tomates assados', description: 'Burrata fresca, tomates confitados e manjericão.', price: '46', category: 'Entradas', tags: ['vegetariano'] },
    { name: 'Carpaccio de filé', description: 'Lâminas finas de filé, alcaparras e lascas de parmesão.', price: '52', category: 'Entradas' },
    { name: 'Creme de abóbora e gengibre', description: 'Abóbora assada, leite de coco e crocante de castanhas.', price: '38', category: 'Entradas', tags: ['vegano', 'sem-gluten'] },

    { name: 'Cordeiro em crosta de ervas', description: 'Risoto de beterraba e redução de vinho tinto.', price: '98', category: 'Principais' },
    { name: 'Filé ao molho de vinho do Porto', description: 'Purê de mandioquinha e legumes salteados.', price: '92', category: 'Principais', tags: ['sem-gluten'] },
    { name: 'Robalo grelhado com aspargos', description: 'Beurre blanc de limão siciliano.', price: '86', category: 'Principais', tags: ['sem-gluten'] },
    { name: 'Risoto de funghi e ervas', description: 'Cogumelos selvagens, manteiga trufada e parmesão.', price: '68', category: 'Principais', tags: ['vegetariano'] },
    { name: 'Nhoque de mandioquinha ao pesto', description: 'Pesto de manjericão fresco e tomate cereja.', price: '62', category: 'Principais', tags: ['vegetariano'] },

    { name: 'Tiramisù da casa', description: 'Receita clássica com café espresso e mascarpone.', price: '32', category: 'Sobremesas', tags: ['vegetariano'] },
    { name: 'Torta de maçã quente', description: 'Massa amanteigada, canela e sorvete de baunilha.', price: '34', category: 'Sobremesas', tags: ['vegetariano'] },
    { name: 'Sorbet de frutas vermelhas', description: 'Frutas da estação, sem adição de lácteos.', price: '28', category: 'Sobremesas', tags: ['vegano', 'sem-gluten'] },

    { name: 'Vinho tinto — taça', description: 'Seleção da casa, safra atual.', price: '32', category: 'Bebidas' },
    { name: 'Água com ou sem gás', description: '500ml.', price: '12', category: 'Bebidas' },
    { name: 'Suco natural da estação', description: 'Consulte o sabor do dia.', price: '18', category: 'Bebidas', tags: ['vegano'] },
    { name: 'Espresso', description: 'Torra média, grãos selecionados.', price: '10', category: 'Bebidas', tags: ['vegano', 'sem-gluten'] }
  ];

  readonly filtered = computed(() => {
    const cat = this.active();
    return cat === 'Todos' ? this.dishes : this.dishes.filter((d) => d.category === cat);
  });

  readonly tagLabel: Record<DietTag, string> = {
    vegetariano: 'Vegetariano',
    vegano: 'Vegano',
    'sem-gluten': 'Sem glúten'
  };

  setActive(cat: Category | 'Todos'): void {
    this.active.set(cat);
  }
}
