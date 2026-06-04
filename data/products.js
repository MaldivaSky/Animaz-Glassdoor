/**
 * ============================================================
 * ANIMAZ PET SHOP — Banco de Dados de Produtos
 * ============================================================
 * 
 * 📌 COMO FAZER MANUTENÇÃO:
 * 
 * ▸ ADICIONAR PRODUTO: Copie um bloco { ... } existente dentro do
 *   array "products", cole no final e altere os campos.
 * 
 * ▸ ALTERAR PREÇO: Encontre o produto pelo "name" e mude o campo "price".
 *   Se o produto tem preço por tamanho, altere o objeto "sizesPricing".
 * 
 * ▸ ADICIONAR CATEGORIA: Insira um novo objeto no array "categories"
 *   com id, name e icon (emoji).
 * 
 * ▸ ADICIONAR FOTOS: Coloque a imagem em assets/products/ e adicione
 *   o caminho no campo "gallery" do produto.
 * 
 * ▸ PRODUTO SEM PREÇO: Coloque "price": 0 — aparecerá "Consulte".
 * 
 * ▸ PREÇO POR TAMANHO: Use o campo "sizesPricing" (ex: DogNerd).
 *   O campo "price" será o menor valor (exibido como "A partir de").
 * 
 * ▸ ESTOQUE: O campo "stock" é um objeto com estoque por tamanho.
 *   Serve para controle interno e será exibido no pedido WhatsApp.
 * 
 * ============================================================
 */

window.animazData = {
  "store": {
    "name": "Animaz Pet Shop",
    "slogan": "Cuidado pet a pet.",
    "whatsapp": "5592981870014",
    "phone": "+55 (92) 98187-0014",
    "units": [
      { "name": "Unidade Parque 10", "hours": "08h às 22h", "address": "Av. Maneca Marques, 1902" },
      { "name": "Unidade Compensa", "hours": "08h às 20h", "address": "Av. Brasil, 1713" },
      { "name": "Unidade Ponta Negra", "hours": "08h às 22h", "address": "Av. Coronel Teixeira, 6525" }
    ],
    "schedule": "Funcionamos de domingo a domingo"
  },

  "categories": [
    { "id": "todos",        "name": "Todos",          "icon": "🐾" },
    { "id": "bandana",      "name": "Bandanas",       "icon": "🎀" },
    { "id": "coleira",      "name": "Coleiras",       "icon": "🔗" },
    { "id": "guia",         "name": "Guias",          "icon": "🦮" },
    { "id": "peitoral",     "name": "Peitorais",      "icon": "🐕" },
    { "id": "peitoral-air", "name": "Peitorais Air",  "icon": "💨" },
    { "id": "roupa",        "name": "Roupas",         "icon": "👕" }
  ],

  "products": [

    /* ============================
       BANDANAS — FreeFaro CBF
       ============================ */
    {
      "id": 1,
      "name": "Bandana CBF Canarinho",
      "category": "bandana",
      "brand": "FreeFaro",
      "price": 41.15,
      "description": "Bandana oficial CBF na cor amarela canarinho. Estampa com escudo da seleção brasileira.",
      "image": "assets/products/Bandana_Brasil_Amarela1-removebg.png",
      "gallery": [
        "assets/products/Bandana_Brasil_Amarela1-removebg.png",
        "assets/products/Bandana_Brasil_verso-removebg.png"
      ],
      "badge": "Copa 2026",
      "sizes": ["P", "M", "G"],
      "stock": { "P": 6, "M": 6, "G": 6 },
      "inStock": true
    },
    {
      "id": 2,
      "name": "Bandana CBF Azulão",
      "category": "bandana",
      "brand": "FreeFaro",
      "price": 41.15,
      "description": "Bandana oficial CBF na cor azul azulão. Design exclusivo com escudo da seleção.",
      "image": "assets/products/Bandana_Brasil_azul1-removebg.png",
      "gallery": [
        "assets/products/Bandana_Brasil_azul1-removebg.png",
        "assets/products/Bandana_Brasil_azul2-removebg.png",
        "assets/products/Bandana_Brasil_verso-removebg.png"
      ],
      "badge": "Copa 2026",
      "sizes": ["P", "M", "G"],
      "stock": { "P": 4, "M": 4, "G": 3 },
      "inStock": true
    },

    /* ============================
       COLEIRAS — FreeFaro CBF
       ============================ */
    {
      "id": 3,
      "name": "Coleira CBF Canarinho",
      "category": "coleira",
      "brand": "FreeFaro",
      "price": 68.00,
      "description": "Coleira oficial CBF amarela canarinho. Fecho de segurança e pingente exclusivo da seleção.",
      "image": "assets/products/Coleira_Brasil_amarela1-removebg-preview.png",
      "gallery": [
        "assets/products/Coleira_Brasil_amarela1-removebg-preview.png",
        "assets/products/Coleira_Brasil_amarela2-removebg.png",
        "assets/products/Coleira_verso-removebg.png"
      ],
      "badge": "Copa 2026",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 6, "P": 6, "M": 6, "G": 6 },
      "inStock": true
    },
    {
      "id": 4,
      "name": "Coleira CBF Azulão",
      "category": "coleira",
      "brand": "FreeFaro",
      "price": 68.00,
      "description": "Coleira oficial CBF azul azulão. Material resistente com acabamento premium.",
      "image": "assets/products/Coleira_Brasil_azul-removebg-preview.png",
      "gallery": [
        "assets/products/Coleira_Brasil_azul-removebg-preview.png",
        "assets/products/Coleira_Brasil_azul2-removebg.png",
        "assets/products/Coleira_verso-removebg.png"
      ],
      "badge": "Copa 2026",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 4, "P": 4, "M": 4, "G": 4 },
      "inStock": true
    },
    {
      "id": 5,
      "name": "Coleira para Gatos CBF Canarinho",
      "category": "coleira",
      "brand": "FreeFaro",
      "price": 55.60,
      "description": "Coleira CBF canarinho exclusiva para gatos. Tamanho único com fecho de segurança.",
      "image": "assets/products/Coleira_Gato_CBF_-_Amarela-removebg.png",
      "gallery": [
        "assets/products/Coleira_Gato_CBF_-_Amarela-removebg.png",
        "assets/products/Coleira_Gato_CBF_-_Amarela2-removebg.png",
        "assets/products/Coleira_Gato_CBF_-_Amarela_verso-removebg.png"
      ],
      "badge": "🐱 Gatos",
      "sizes": ["U"],
      "stock": { "U": 8 },
      "inStock": true
    },
    {
      "id": 6,
      "name": "Coleira para Gatos CBF Azulão",
      "category": "coleira",
      "brand": "FreeFaro",
      "price": 55.60,
      "description": "Coleira CBF azulão exclusiva para gatos. Tamanho único com fecho de segurança.",
      "image": "assets/products/Coleira_Brasil_azul-removebg-preview.png",
      "gallery": [
        "assets/products/Coleira_Brasil_azul-removebg-preview.png",
        "assets/products/Coleira_verso-removebg.png"
      ],
      "badge": "🐱 Gatos",
      "sizes": ["U"],
      "stock": { "U": 6 },
      "inStock": true
    },

    /* ============================
       GUIAS TRADICIONAIS — FreeFaro CBF
       ============================ */
    {
      "id": 7,
      "name": "Guia Tradicional 1,2m CBF Canarinho",
      "category": "guia",
      "brand": "FreeFaro",
      "price": 111.60,
      "description": "Guia tradicional 1,2m CBF amarela canarinho. Ajuste perfeito e máximo conforto para passeios.",
      "image": "assets/products/Guia_Peitoral_Brasil_Amarelo1-removebg.png",
      "gallery": [
        "assets/products/Guia_Peitoral_Brasil_Amarelo1-removebg.png",
        "assets/products/Guia_Peitoral_Brasil_Amarelo2-removebg.png",
        "assets/products/Guia_Peitoral_Brasil_Amarelo3-removebg.png",
        "assets/products/Guia_Peitoral_Brasil_verso-removebg.png"
      ],
      "badge": "Copa 2026",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 8, "P": 8, "M": 8, "G": 8 },
      "inStock": true
    },
    {
      "id": 8,
      "name": "Guia Tradicional 1,2m CBF Azulão",
      "category": "guia",
      "brand": "FreeFaro",
      "price": 111.40,
      "description": "Guia tradicional 1,2m CBF azul azulão. Design ergonômico para passeios confortáveis.",
      "image": "assets/products/Guia_Peitoral_Brasil_Azul1-removebg.png",
      "gallery": [
        "assets/products/Guia_Peitoral_Brasil_Azul1-removebg.png",
        "assets/products/Guia_Peitoral_Brasil_verso-removebg.png"
      ],
      "badge": "Copa 2026",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 4, "P": 4, "M": 4, "G": 4 },
      "inStock": true
    },

    /* ============================
       PEITORAIS H — FreeFaro CBF
       (Sem preço definido — Consulte)
       ============================ */
    {
      "id": 9,
      "name": "Peitoral H CBF Canarinho",
      "category": "peitoral",
      "brand": "FreeFaro",
      "price": 0,
      "description": "Peitoral modelo H CBF amarelo canarinho. Confortável e seguro para passeios diários.",
      "image": "assets/products/Guia_Peitoral_Brasil_Amarelo1-removebg.png",
      "gallery": [
        "assets/products/Guia_Peitoral_Brasil_Amarelo1-removebg.png",
        "assets/products/Guia_Peitoral_Brasil_Amarelo2-removebg.png",
        "assets/products/Guia_Peitoral_Brasil_verso-removebg.png"
      ],
      "badge": "Consulte",
      "sizes": ["P", "M", "G"],
      "stock": { "P": 6, "M": 6, "G": 6 },
      "inStock": true
    },
    {
      "id": 10,
      "name": "Peitoral H CBF Azulão",
      "category": "peitoral",
      "brand": "FreeFaro",
      "price": 0,
      "description": "Peitoral modelo H CBF azul azulão. Confortável e seguro para passeios diários.",
      "image": "assets/products/Guia_Peitoral_Brasil_Azul1-removebg.png",
      "gallery": [
        "assets/products/Guia_Peitoral_Brasil_Azul1-removebg.png",
        "assets/products/Guia_Peitoral_Brasil_verso-removebg.png"
      ],
      "badge": "Consulte",
      "sizes": ["P", "M", "G"],
      "stock": { "P": 4, "M": 4, "G": 3 },
      "inStock": true
    },

    /* ============================
       PEITORAIS AIR — FreeFaro CBF
       ============================ */
    {
      "id": 11,
      "name": "Peitoral Air CBF Canarinho",
      "category": "peitoral-air",
      "brand": "FreeFaro",
      "price": 156.85,
      "description": "Peitoral Air com tecnologia respirável. Estampa exclusiva CBF amarela canarinho.",
      "image": "assets/products/Peitoral_Air_brasil_amarelo1-removebg.png",
      "gallery": [
        "assets/products/Peitoral_Air_brasil_amarelo1-removebg.png",
        "assets/products/Peitoral_Air_brasil_amarelo2-removebg.png"
      ],
      "badge": "Premium",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 6, "P": 8, "M": 8, "G": 6 },
      "inStock": true
    },
    {
      "id": 12,
      "name": "Peitoral Air CBF Azulão",
      "category": "peitoral-air",
      "brand": "FreeFaro",
      "price": 156.85,
      "description": "Peitoral Air azul com malha respirável. Conforto e estilo CBF para seu pet.",
      "image": "assets/products/Peitoral_Air_brasil_azul2-removebg-preview.png",
      "gallery": [
        "assets/products/Peitoral_Air_brasil_azul2-removebg-preview.png"
      ],
      "badge": "Premium",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 4, "P": 4, "M": 4, "G": 4 },
      "inStock": true
    },

    /* ============================
       ROUPAS — DogNerd (UV50+)
       Preço varia por tamanho!
       ============================ */
    {
      "id": 13,
      "name": "Roupa UV50+ Brasil Amarela 2026",
      "category": "roupa",
      "brand": "DogNerd",
      "price": 80.60,
      "description": "Camisa UV50+ oficial Brasil 2026 amarela. Proteção solar e tecido tecnológico leve.",
      "image": "assets/products/Roupa_Brasil_Amarela_10-removebg.png",
      "gallery": [
        "assets/products/Roupa_Brasil_Amarela_10-removebg.png",
        "assets/products/Roupa_Brasil_Amarela_Caramelo_10-removebg-preview.png",
        "assets/products/Roupa_Brasil_Amarela_Caramelo_10_lado2-removebg.png"
      ],
      "badge": "UV50+",
      "sizes": ["1", "2", "3", "4", "5", "6", "7"],
      "sizesPricing": {
        "1": 80.60, "2": 80.60, "3": 92.00, "4": 92.00,
        "5": 102.35, "6": 112.65, "7": 112.65
      },
      "stock": {
        "1": 14, "2": 10, "3": 9, "4": 13, "5": 6, "6": 5, "7": 4
      },
      "inStock": true
    },
    {
      "id": 14,
      "name": "Roupa UV50+ Brasil Azul 2026",
      "category": "roupa",
      "brand": "DogNerd",
      "price": 80.60,
      "description": "Camisa UV50+ oficial Brasil 2026 azul. Proteção solar e tecido tecnológico leve.",
      "image": "assets/products/Roupa_Brasil_Azul_Caramelo_10-removebg.png",
      "gallery": [
        "assets/products/Roupa_Brasil_Azul_Caramelo_10-removebg.png",
        "assets/products/Roupa_Brasil_Azul_Caramelo_10_lado_2-removebg.png"
      ],
      "badge": "UV50+",
      "sizes": ["1", "2", "3", "4", "5", "6", "7"],
      "sizesPricing": {
        "1": 80.60, "2": 82.60, "3": 92.00, "4": 92.00,
        "5": 102.35, "6": 112.65, "7": 112.65
      },
      "stock": {
        "1": 14, "2": 12, "3": 8, "4": 13, "5": 5, "6": 3, "7": 5
      },
      "inStock": true
    },

    /* ============================
       ROUPAS — Oh My Dog
       ============================ */
    {
      "id": 15,
      "name": "Vestido Polo Copa",
      "category": "roupa",
      "brand": "Oh My Dog",
      "price": 122.35,
      "description": "Vestido Polo Copa do Mundo para fêmeas. Design elegante com acabamento premium.",
      "image": "assets/products/Roupa_Brasil_Amarela_Saia_Femea-removebg.png",
      "gallery": [
        "assets/products/Roupa_Brasil_Amarela_Saia_Femea-removebg.png",
        "assets/products/Roupa_Brasil_Amarela_Saia_Femea_lado2-removebg.png"
      ],
      "badge": "Fêmeas",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 1, "P": 2, "M": 1, "G": 4 },
      "inStock": true
    },
    {
      "id": 16,
      "name": "Camiseta Dry Copa",
      "category": "roupa",
      "brand": "Oh My Dog",
      "price": 85.20,
      "description": "Camiseta Dry Copa do Mundo. Tecido leve, secagem rápida e estampa oficial.",
      "image": "assets/products/Roupa_Brasil_Amarela_Caramelo_10-removebg-preview.png",
      "gallery": [
        "assets/products/Roupa_Brasil_Amarela_Caramelo_10-removebg-preview.png",
        "assets/products/Roupa_Brasil_Amarela_Caramelo_10_lado2-removebg.png"
      ],
      "badge": "Dry Fit",
      "sizes": ["PP", "P", "M", "G", "GG"],
      "stock": { "PP": 2, "P": 3, "M": 4, "G": 2, "GG": 1 },
      "inStock": true
    }
  ]
}
