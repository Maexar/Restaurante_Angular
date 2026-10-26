# Âmbar — Restaurante (projeto Angular)

Projeto simples em Angular (componentes standalone, Angular 17) simulando o site e o painel
interno de um restaurante fictício.

## Telas incluídas

- **Início** (`/`) — hero, pilares da casa e pratos em destaque
- **Menu** (`/menu`) — cardápio com filtro por categoria
- **Reservas** (`/reservas`) — formulário de reserva com seleção de horário
- **Painel / Dashboard** (`/dashboard`) — indicadores, gráfico semanal e pedidos recentes
- **Sobre** (`/sobre`) — história do restaurante e horário de funcionamento
- **Contato** (`/contato`) — formulário de contato e informações

## Como rodar

```bash
npm install
npm start
```

A aplicação abre em `http://localhost:4200`.

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos ficam em `dist/restaurante-ambar`.

## Estrutura

```
src/app/
  core/            configuração da aplicação e das rotas
  shared/          navbar e footer (compartilhados entre as telas)
  pages/           uma pasta por tela (home, dashboard, menu, reservations, about, contact)
```

## Notas de design

Paleta verde-mata + latão + pergaminho, tipografia Fraunces (títulos) + Work Sans (texto) +
Space Mono (preços e dados). Os preços e itens de horário usam o padrão "linha com pontilhado",
inspirado em cardápios impressos. Não há emojis em nenhum elemento — todos os ícones são SVGs
de traço simples desenhados no próprio código.
