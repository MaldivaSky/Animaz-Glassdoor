# 🐾 Animaz Pet Shop - Coleção WorldCup Brasil 🇧🇷

Uma vitrine digital interativa e responsiva desenvolvida para a **Animaz Pet Shop** (Manaus/AM) com foco na coleção exclusiva **Moda WorldCup Brasil**. O sistema funciona como um catálogo interativo com carrinho de pedidos integrado, permitindo a exportação de orçamentos e fechamento rápido via WhatsApp.

---

## 📸 Demonstração e Layout
O projeto conta com um design moderno e elegante utilizando a paleta de cores da seleção brasileira combinada à identidade visual premium da Animaz (tons de roxo, dourado e verde-limão). Possui efeitos de Glassmorphism, transições suaves e carregamento dinâmico otimizado.

---

## 🚀 Funcionalidades Principais

*   **🔍 Busca em Tempo Real:** Barra de pesquisa instantânea que destaca o termo buscado nos nomes, marcas e descrições dos produtos.
*   **🏷️ Filtros por Categoria:** Navegação rápida por pílulas de categorias (Todos, Bandanas, Coleiras, Guias Peitorais, Peitorais Air e Roupas).
*   **🛒 Carrinho de Compras Otimizado:**
    *   Painel lateral interativo (*Drawer*) para gerenciamento do pedido.
    *   Persistência de dados utilizando o `localStorage` do navegador.
    *   Seleção dinâmica de tamanhos e controle de quantidades direto no card do produto.
*   **📄 Exportação de Orçamentos:**
    *   **PDF Profissional:** Geração automatizada de orçamentos estilizados em formato PDF usando `jsPDF` e `AutoTable`.
    *   **Excel/Planilha:** Geração de tabelas de pedidos formatadas utilizando `SheetJS` (XLSX).
*   **💬 Integração com WhatsApp:** Fechamento de pedido com mensagem estruturada contendo detalhes de itens, tamanhos, quantidades e total, direcionada para a unidade da Animaz Manaus.
*   **🖼️ Lightbox Interativo:** Visualização ampliada das imagens dos produtos com suporte a carrossel de fotos (galerias).
*   **📱 Totalmente Responsivo:** Design adaptado para smartphones, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

A aplicação foi desenvolvida utilizando tecnologias web nativas para garantir o máximo desempenho e leveza:

*   **Estrutura:** HTML5 Semântico.
*   **Estilização:** CSS3 Vanilla (Design System baseado em Variáveis CSS, Flexbox, CSS Grid e animações customizadas).
*   **Tipografia:** Fonte *Outfit* (Google Fonts).
*   **Lógica:** JavaScript Moderno (ES6+) para manipulação assíncrona do DOM e controle de estado global.
*   **Bibliotecas Externas:**
    *   [jsPDF](https://github.com/parallax/jsPDF) — Para geração dos arquivos PDF.
    *   [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) — Para estilização das tabelas no PDF.
    *   [SheetJS (XLSX)](https://github.com/SheetJS/sheetjs) — Para geração de planilhas Excel.

---

## 📂 Estrutura de Diretórios

```bash
├── assets/                 # Logotipos, banners promocionais e imagens de produtos
├── css/
│   └── styles.css          # Design system, variáveis de cor, layout e animações
├── data/
│   ├── products.js         # Banco de dados estático e configurações da loja (JS)
│   └── products.json       # Cópia estruturada do banco em formato JSON
├── js/
│   ├── app.js              # Lógica da vitrine (renderização, busca, ordenação e lightbox)
│   ├── cart.js             # Gerenciamento do carrinho e sistema de toasts (alertas)
│   └── export.js           # Funções de exportação para PDF, Excel e API do WhatsApp
├── index.html              # Estrutura principal da página única (SPA)
└── README.md               # Documentação do projeto
```

---

## 💻 Como Rodar o Projeto Localmente

Por se tratar de uma aplicação baseada em HTML, CSS e JavaScript puros (Serverless/Static), não é necessária nenhuma instalação complexa de dependências do Node.js para rodar em desenvolvimento:

1.  Clone o repositório ou faça o download dos arquivos.
2.  Abra o arquivo `index.html` diretamente em seu navegador favorito ou utilize uma extensão de servidor local no seu editor de código (como o **Live Server** do VS Code) para ter suporte a Hot Reload.

---

## 📍 Informações da Empresa (Configurações)
O catálogo está pré-configurado para a **Animaz Pet Shop** com as seguintes informações comerciais presentes no rodapé e no fluxo de fechamento de pedidos:
*   **WhatsApp de Atendimento:** +55 (92) 98187-0014 (Manaus)
*   **Unidades Físicas:**
    *   *Parque 10:* Funcionamento das 08h às 22h.
    *   *Compensa:* Funcionamento das 08h às 20h.
*   **Serviços Oferecidos:** Banho & Tosa, Veterinário, Clique e Retire e Delivery.

---

Feito com 💜 para a Animaz Pet Shop.
