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
    { "id": "roupa",        "name": "Roupas",         "icon": "👕" },
    { "id": "moda-junina",  "name": "Moda Junina",    "icon": "🌽" }
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
    },

    /* ============================
       MODA JUNINA — Coleção Festa Junina
       ============================ */

    {
      "id": 17,
      "name": "Vestido Oh My Donut",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 93.35,
      "description": "Vestido Oh My Donut — estampado e charmoso para a festança. Disponível nos tamanhos PP ao GGG.",
      "image": "assets/moda_junina/A142_Vestido_Oh_My_Donut_1.png",
      "gallery": [
        "assets/moda_junina/A142_Vestido_Oh_My_Donut_1.png",
        "assets/moda_junina/A142_Vestido_Oh_My_Donut_2.png",
        "assets/moda_junina/A142_Vestido_Oh_My_Donut_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G", "EG", "GGG"],
      "sizesPricing": { "PP": 93.35, "P": 93.35, "M": 93.35, "G": 93.35, "EG": 106.70, "GGG": 140.55 },
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5, "EG": 3, "GGG": 2 },
      "inStock": true
    },
    {
      "id": 18,
      "name": "Vestido Drama Queen",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 84.45,
      "description": "Vestido Drama Queen — estilo e drama na medida certa para a festa junina. Tamanhos PP a G.",
      "image": "assets/moda_junina/A175_Vestido_Drama_Queen_1.png",
      "gallery": [
        "assets/moda_junina/A175_Vestido_Drama_Queen_1.png",
        "assets/moda_junina/A175_Vestido_Drama_Queen_2.png",
        "assets/moda_junina/A175_Vestido_Drama_Queen_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "M", "G", "GG"],
      "stock": { "PP": 5, "M": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 19,
      "name": "Vestido Potinho de Amor",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 84.45,
      "description": "Vestido Potinho de Amor — fofura e charme para o arraial. Tamanhos PP a GG.",
      "image": "assets/moda_junina/A176_Vestido_Potinho_de_Amor_1.png",
      "gallery": [
        "assets/moda_junina/A176_Vestido_Potinho_de_Amor_1.png",
        "assets/moda_junina/A176_Vestido_Potinho_de_Amor_2.png",
        "assets/moda_junina/A176_Vestido_Potinho_de_Amor_3.png",
        "assets/moda_junina/A176_Vestido_Potinho_de_Amor_4.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "M", "G", "GG"],
      "stock": { "PP": 5, "M": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 20,
      "name": "Vestido Floral Summer",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 106.70,
      "description": "Vestido Floral Summer — estampa florida cheia de verão e alegria para a festa junina.",
      "image": "assets/moda_junina/A182_Vestido_Floral_Summer_1.png",
      "gallery": [
        "assets/moda_junina/A182_Vestido_Floral_Summer_1.png",
        "assets/moda_junina/A182_Vestido_Floral_Summer_2.png",
        "assets/moda_junina/A182_Vestido_Floral_Summer_3.png",
        "assets/moda_junina/A182_Vestido_Floral_Summer_4.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G", "GG"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 21,
      "name": "Jardineira Fran",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 151.15,
      "description": "Jardineira Fran — look completo e estiloso para arrasar no arraial. Tamanhos PP a G.",
      "image": "assets/moda_junina/A186_Jardineira_Fran_1.png",
      "gallery": [
        "assets/moda_junina/A186_Jardineira_Fran_1.png",
        "assets/moda_junina/A186_Jardineira_Fran_2.png",
        "assets/moda_junina/A186_Jardineira_Fran_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5 },
      "inStock": true
    },
    {
      "id": 22,
      "name": "Jardineira Floral Azul",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 157.10,
      "description": "Jardineira Floral Azul — estampa floral vibrante em azul para brilhar na festa junina.",
      "image": "assets/moda_junina/A195_Jardineira_Floral_Azul_1.png",
      "gallery": [
        "assets/moda_junina/A195_Jardineira_Floral_Azul_1.png",
        "assets/moda_junina/A195_Jardineira_Floral_Azul_2.png",
        "assets/moda_junina/A195_Jardineira_Floral_Azul_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5 },
      "inStock": true
    },
    {
      "id": 23,
      "name": "Vestido Floral Aimé",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 106.70,
      "description": "Vestido Floral Aimé — elegância floral para o look junino mais bonito do arraial.",
      "image": "assets/moda_junina/A199_Vestido_Floral_Aime_1.png",
      "gallery": [
        "assets/moda_junina/A199_Vestido_Floral_Aime_1.png",
        "assets/moda_junina/A199_Vestido_Floral_Aime_2.png",
        "assets/moda_junina/A199_Vestido_Floral_Aime_3.png",
        "assets/moda_junina/A199_Vestido_Floral_Aime_4.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["M"],
      "stock": { "M": 3 },
      "inStock": true
    },
    {
      "id": 24,
      "name": "Camiseta Fitness Azul",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 80.00,
      "description": "Camiseta Fitness Azul — conforto e estilo para o seu pet arrasar na festança. Tamanhos PP a EG.",
      "image": "assets/moda_junina/B126_Camisetas_Fitness_Azul_1.png",
      "gallery": [
        "assets/moda_junina/B126_Camisetas_Fitness_Azul_1.png",
        "assets/moda_junina/B126_Camisetas_Fitness_Azul_2.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "EG"],
      "sizesPricing": { "PP": 80.00, "P": 80.00, "M": 80.00, "EG": 88.90 },
      "stock": { "PP": 5, "P": 5, "M": 5, "EG": 3 },
      "inStock": true
    },
    {
      "id": 25,
      "name": "Camiseta Fitness Rosa",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 103.35,
      "description": "Camiseta Fitness Rosa — look leve e descolado para o arraial. Disponível em tamanhos 3G e 4G.",
      "image": "assets/moda_junina/B138_Camisetas_Fitness_Rosa_1.png",
      "gallery": [
        "assets/moda_junina/B138_Camisetas_Fitness_Rosa_1.png",
        "assets/moda_junina/B138_Camisetas_Fitness_Rosa_2.png",
        "assets/moda_junina/B138_Camisetas_Fitness_Rosa_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["3G", "4G"],
      "sizesPricing": { "3G": 103.35, "4G": 113.70 },
      "stock": { "3G": 3, "4G": 2 },
      "inStock": true
    },
    {
      "id": 26,
      "name": "Camiseta Basic Gola",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 75.60,
      "description": "Camiseta Basic Gola — peça coringa e confortável para o seu pet brilhar no arraial.",
      "image": "assets/moda_junina/B160_Camiseta_Basic_Gola_1.png",
      "gallery": [
        "assets/moda_junina/B160_Camiseta_Basic_Gola_1.png",
        "assets/moda_junina/B160_Camiseta_Basic_Gola_2.png",
        "assets/moda_junina/B160_Camiseta_Basic_Gola_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["P", "EG"],
      "stock": { "P": 5, "EG": 3 },
      "inStock": true
    },
    {
      "id": 27,
      "name": "Camiseta Brigadeiro",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 84.45,
      "description": "Camiseta Brigadeiro — doce e estilosa para a festa junina. Diversos tamanhos disponíveis.",
      "image": "assets/moda_junina/B174_Camiseta_Brigadeiro_1.png",
      "gallery": [
        "assets/moda_junina/B174_Camiseta_Brigadeiro_1.png",
        "assets/moda_junina/B174_Camiseta_Brigadeiro_2.png",
        "assets/moda_junina/B174_Camiseta_Brigadeiro_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["M", "G", "GG", "2G", "3G", "4G"],
      "sizesPricing": { "M": 84.45, "G": 84.45, "GG": 84.45, "2G": 88.90, "3G": 111.15, "4G": 122.25 },
      "stock": { "M": 5, "G": 5, "GG": 5, "2G": 3, "3G": 2, "4G": 2 },
      "inStock": true
    },
    {
      "id": 28,
      "name": "Camiseta Xadrez Nozinho",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 80.00,
      "description": "Camiseta Xadrez Nozinho — o clássico xadrez junino com um toque moderno de nozinho.",
      "image": "assets/moda_junina/B220_Camiseta_Xadrez_Nozinho_1.png",
      "gallery": [
        "assets/moda_junina/B220_Camiseta_Xadrez_Nozinho_1.png",
        "assets/moda_junina/B220_Camiseta_Xadrez_Nozinho_2.png",
        "assets/moda_junina/B220_Camiseta_Xadrez_Nozinho_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "G", "GG"],
      "stock": { "PP": 5, "P": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 29,
      "name": "Camiseta Desejo o Melhor",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 80.00,
      "description": "Camiseta Desejo o Melhor — mensagem positiva e visual charmoso para a festa junina.",
      "image": "assets/moda_junina/BB008_Camiseta_Desejo_o_Melhor_1.png",
      "gallery": [
        "assets/moda_junina/BB008_Camiseta_Desejo_o_Melhor_1.png",
        "assets/moda_junina/BB008_Camiseta_Desejo_o_Melhor_2.png",
        "assets/moda_junina/BB008_Camiseta_Desejo_o_Melhor_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G", "GG"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 30,
      "name": "Camiseta Influência",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 80.00,
      "description": "Camiseta Influência — para o pet que dita tendência no arraial. Tamanhos P e PP.",
      "image": "assets/moda_junina/BB023_Camiseta_Influencia_1.png",
      "gallery": [
        "assets/moda_junina/BB023_Camiseta_Influencia_1.png",
        "assets/moda_junina/BB023_Camiseta_Influencia_2.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P"],
      "stock": { "PP": 5, "P": 5 },
      "inStock": true
    },
    {
      "id": 31,
      "name": "Camiseta Dance Unicórnio",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 80.00,
      "description": "Camiseta Dance Unicórnio — magia e alegria para dançar no forró. Tamanhos PP a G.",
      "image": "assets/moda_junina/BB026_Camiseta_Dance_Unicornio_1.png",
      "gallery": [
        "assets/moda_junina/BB026_Camiseta_Dance_Unicornio_1.png",
        "assets/moda_junina/BB026_Camiseta_Dance_Unicornio_2.png",
        "assets/moda_junina/BB026_Camiseta_Dance_Unicornio_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5 },
      "inStock": true
    },
    {
      "id": 32,
      "name": "Camisa Pet Personalizada",
      "category": "moda-junina",
      "brand": "Jambo",
      "price": 53.15,
      "description": "Camisa Pet Personalizada — peça especial e exclusiva para o seu pet. Tamanhos P, M e G.",
      "image": "assets/moda_junina/CAMISA_PET_PERSONALIZADA_1.png",
      "gallery": [
        "assets/moda_junina/CAMISA_PET_PERSONALIZADA_1.png",
        "assets/moda_junina/CAMISA_PET_PERSONALIZADA_2.png"
      ],
      "badge": "Personalizado",
      "sizes": ["P", "M", "G"],
      "sizesPricing": { "P": 53.15, "M": 59.80, "G": 66.45 },
      "stock": { "P": 5, "M": 5, "G": 5 },
      "inStock": true
    },
    {
      "id": 33,
      "name": "Camiseta Moranguinho Babados",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 133.40,
      "description": "Camiseta Moranguinho com Babados — fofura máxima e muito estilo para o arraial.",
      "image": "assets/moda_junina/Camiseta_Moranguinho_Babados_1.png",
      "gallery": [
        "assets/moda_junina/Camiseta_Moranguinho_Babados_1.png",
        "assets/moda_junina/Camiseta_Moranguinho_Babados_2.png",
        "assets/moda_junina/Camiseta_Moranguinho_Babados_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G", "GG"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 34,
      "name": "Camiseta Rock N Roll",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 80.00,
      "description": "Camiseta Rock N Roll — para o pet que mistura forró e rock no mesmo look.",
      "image": "assets/moda_junina/CAMISETA_ROCK_N_ROLL_1.png",
      "gallery": [
        "assets/moda_junina/CAMISETA_ROCK_N_ROLL_1.png",
        "assets/moda_junina/CAMISETA_ROCK_N_ROLL_2.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G", "GG"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 35,
      "name": "Casaco Torre",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 88.55,
      "description": "Casaco Torre — elegância e aconchego para as noites frias do arraial.",
      "image": "assets/moda_junina/CASACO_TORRE_1.png",
      "gallery": [
        "assets/moda_junina/CASACO_TORRE_1.png",
        "assets/moda_junina/CASACO_TORRE_2.png",
        "assets/moda_junina/CASACO_TORRE_3.png",
        "assets/moda_junina/CASACO_TORRE_4png.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP"],
      "stock": { "PP": 3 },
      "inStock": true
    },
    {
      "id": 36,
      "name": "Colete Classic Urso Marinho",
      "category": "moda-junina",
      "brand": "Bonito Pra Cachorro",
      "price": 136.65,
      "description": "Colete Classic Urso Marinho — estilo navy com ursinho para o pet arrasar na festança.",
      "image": "assets/moda_junina/COLETE_CLASSIC_URSO_MARINHO_1.png",
      "gallery": [
        "assets/moda_junina/COLETE_CLASSIC_URSO_MARINHO_1.png",
        "assets/moda_junina/COLETE_CLASSIC_URSO_MARINHO_2.png",
        "assets/moda_junina/COLETE_CLASSIC_URSO_MARINHO_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5 },
      "inStock": true
    },
    {
      "id": 37,
      "name": "Colete Classic Urso Rosé",
      "category": "moda-junina",
      "brand": "Bonito Pra Cachorro",
      "price": 136.65,
      "description": "Colete Classic Urso Rosé — delicado e fofo, ideal para fêmeas no arraial.",
      "image": "assets/moda_junina/COLETE_CLASSIC_URSO_ROSE_1.png",
      "gallery": [
        "assets/moda_junina/COLETE_CLASSIC_URSO_ROSE_1.png",
        "assets/moda_junina/COLETE_CLASSIC_URSO_ROSE_2.png",
        "assets/moda_junina/COLETE_CLASSIC_URSO_ROSE_3.png",
        "assets/moda_junina/COLETE_CLASSIC_URSO_ROSE_4.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5 },
      "inStock": true
    },
    {
      "id": 38,
      "name": "Colete Mochila Anjinho Azul",
      "category": "moda-junina",
      "brand": "Bonito Pra Cachorro",
      "price": 172.55,
      "description": "Colete Mochila Anjinho Azul — funcional e fofo com mochilinha de anjinho. Tamanhos PP a M.",
      "image": "assets/moda_junina/COLETE_MOCHILA_ANJINHO_AZUL_1.png",
      "gallery": [
        "assets/moda_junina/COLETE_MOCHILA_ANJINHO_AZUL_1.png",
        "assets/moda_junina/COLETE_MOCHILA_ANJINHO_AZUL_2.png",
        "assets/moda_junina/COLETE_MOCHILA_ANJINHO_AZUL_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M"],
      "stock": { "PP": 3, "P": 3, "M": 3 },
      "inStock": true
    },
    {
      "id": 39,
      "name": "Colete Mochila Ursinho Rosa",
      "category": "moda-junina",
      "brand": "Bonito Pra Cachorro",
      "price": 147.85,
      "description": "Colete Mochila Ursinho Rosa — mochilinha de ursinho para passeios e festinhas.",
      "image": "assets/moda_junina/COLETE_MOCHILA_URSINHO_ROSA_1.png",
      "gallery": [
        "assets/moda_junina/COLETE_MOCHILA_URSINHO_ROSA_1.png",
        "assets/moda_junina/COLETE_MOCHILA_URSINHO_ROSA_2.png",
        "assets/moda_junina/COLETE_MOCHILA_URSINHO_ROSA_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M"],
      "stock": { "PP": 3, "P": 3, "M": 3 },
      "inStock": true
    },
    {
      "id": 40,
      "name": "Colete Realeza Azul",
      "category": "moda-junina",
      "brand": "Bonito Pra Cachorro",
      "price": 141.15,
      "description": "Colete Realeza Azul — visual nobre e elegante para o rei ou rainha do arraial.",
      "image": "assets/moda_junina/COLETE_REALEZA_AZUL_1.png",
      "gallery": [
        "assets/moda_junina/COLETE_REALEZA_AZUL_1.png",
        "assets/moda_junina/COLETE_REALEZA_AZUL_2.png",
        "assets/moda_junina/COLETE_REALEZA_AZUL_3.png",
        "assets/moda_junina/COLETE_REALEZA_AZUL_4.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "M"],
      "stock": { "PP": 3, "M": 3 },
      "inStock": true
    },
    {
      "id": 41,
      "name": "Jardineira Moranguinho",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 155.40,
      "description": "Jardineira Moranguinho — look completo com estampa de morango irresistível. Tamanhos PP, P e GG.",
      "image": "assets/moda_junina/Jardineira_Moranguinho_1.png",
      "gallery": [
        "assets/moda_junina/Jardineira_Moranguinho_1.png",
        "assets/moda_junina/Jardineira_Moranguinho_2.png",
        "assets/moda_junina/Jardineira_Moranguinho_3.png",
        "assets/moda_junina/Jardineira_Moranguinho_4.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "GG"],
      "stock": { "PP": 3, "P": 3, "GG": 3 },
      "inStock": true
    },
    {
      "id": 42,
      "name": "Peitoral Floral Kiara",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 115.75,
      "description": "Peitoral Floral Kiara — peitoral delicado com estampa floral para o look junino perfeito.",
      "image": "assets/moda_junina/Peitoral_Floral_Kiara_1.png",
      "gallery": [
        "assets/moda_junina/Peitoral_Floral_Kiara_1.png",
        "assets/moda_junina/Peitoral_Floral_Kiara_2.png",
        "assets/moda_junina/Peitoral_Floral_Kiara_3.png",
        "assets/moda_junina/Peitoral_Floral_Kiara_4.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P"],
      "stock": { "PP": 3, "P": 3 },
      "inStock": true
    },
    {
      "id": 43,
      "name": "Regata c/ Patinho Amarelo",
      "category": "moda-junina",
      "brand": "Bonito Pra Cachorro",
      "price": 105.25,
      "description": "Regata com Patinho Amarelo — leveza e fofura para os dias de festa junina. Tamanhos P a G.",
      "image": "assets/moda_junina/REGATA_C_PATINHO_AMARELO_1.png",
      "gallery": [
        "assets/moda_junina/REGATA_C_PATINHO_AMARELO_1.png",
        "assets/moda_junina/REGATA_C_PATINHO_AMARELO_2.png",
        "assets/moda_junina/REGATA_C_PATINHO_AMARELO_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["P", "M", "G"],
      "stock": { "P": 5, "M": 5, "G": 5 },
      "inStock": true
    },
    {
      "id": 44,
      "name": "Regata c/ Sapinho Verde",
      "category": "moda-junina",
      "brand": "Bonito Pra Cachorro",
      "price": 105.25,
      "description": "Regata com Sapinho Verde — estampa divertida e refrescante para o arraial.",
      "image": "assets/moda_junina/REGATA_C_SAPINHO_VERDE_1.png",
      "gallery": [
        "assets/moda_junina/REGATA_C_SAPINHO_VERDE_1.png",
        "assets/moda_junina/REGATA_C_SAPINHO_VERDE_2.png",
        "assets/moda_junina/REGATA_C_SAPINHO_VERDE_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5 },
      "inStock": true
    },
    {
      "id": 45,
      "name": "Regata Maxi Sport",
      "category": "moda-junina",
      "brand": "Bonito Pra Cachorro",
      "price": 147.85,
      "description": "Regata Maxi Sport — performance e estilo para o pet mais ativo da festa junina.",
      "image": "assets/moda_junina/REGATA_MAXI_SPORT_REGM2080257_1.png",
      "gallery": [
        "assets/moda_junina/REGATA_MAXI_SPORT_REGM2080257_1.png",
        "assets/moda_junina/REGATA_MAXI_SPORT_REGM2080257_2.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["P", "M", "G"],
      "sizesPricing": { "P": 147.85, "M": 163.60, "G": 179.30 },
      "stock": { "P": 3, "M": 3, "G": 3 },
      "inStock": true
    },
    {
      "id": 46,
      "name": "Regata Sport",
      "category": "moda-junina",
      "brand": "Bonito Pra Cachorro",
      "price": 134.40,
      "description": "Regata Sport — modelagem esportiva e confortável para o pet dançarino.",
      "image": "assets/moda_junina/REGATA_SPORT_REGL2080173_1.png",
      "gallery": [
        "assets/moda_junina/REGATA_SPORT_REGL2080173_1.png",
        "assets/moda_junina/REGATA_SPORT_REGL2080173_2.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P"],
      "stock": { "PP": 3, "P": 3 },
      "inStock": true
    },
    {
      "id": 47,
      "name": "Vestido Cereja",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 66.70,
      "description": "Vestido Cereja — doce e colorido para o pet que ama ser o centro das atenções no arraial.",
      "image": "assets/moda_junina/Vestido_Cereja_1.png",
      "gallery": [
        "assets/moda_junina/Vestido_Cereja_1.png",
        "assets/moda_junina/Vestido_Cereja_2.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["P", "M"],
      "stock": { "P": 5, "M": 5 },
      "inStock": true
    },
    {
      "id": 48,
      "name": "Vestido Colegial Xadrez Listrado",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 103.35,
      "description": "Vestido Colegial Xadrez Listrado — o clássico xadrez reinventado com listras para arrasar no forró.",
      "image": "assets/moda_junina/VESTIDO_COLEGIAL_XADREZ_LISTRADO_1.png",
      "gallery": [
        "assets/moda_junina/VESTIDO_COLEGIAL_XADREZ_LISTRADO_1.png",
        "assets/moda_junina/VESTIDO_COLEGIAL_XADREZ_LISTRADO_2.png",
        "assets/moda_junina/VESTIDO_COLEGIAL_XADREZ_LISTRADO_3.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M"],
      "stock": { "PP": 5, "P": 5, "M": 5 },
      "inStock": true
    },
    {
      "id": 49,
      "name": "Vestido Docinho Gucci",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 144.45,
      "description": "Vestido Docinho Gucci — requinte e sofisticação para o pet mais fashion do arraial.",
      "image": "assets/moda_junina/Vestido_Docinho_Gucci_1.png",
      "gallery": [
        "assets/moda_junina/Vestido_Docinho_Gucci_1.png",
        "assets/moda_junina/Vestido_Docinho_Gucci_2.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["P", "G"],
      "stock": { "P": 3, "G": 3 },
      "inStock": true
    },
    {
      "id": 50,
      "name": "Vestido Laço Jeans Azul",
      "category": "moda-junina",
      "brand": "Fábrica Pet / Meu Osso",
      "price": 56.20,
      "description": "Vestido Laço Jeans Azul — combinação perfeita de jeans e laço para o look junino moderno.",
      "image": "assets/moda_junina/VESTIDO_LAO_JEANS_AZUL_1.png",
      "gallery": [
        "assets/moda_junina/VESTIDO_LAO_JEANS_AZUL_1.png",
        "assets/moda_junina/VESTIDO_LAO_JEANS_AZUL_2.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["02", "03", "04"],
      "sizesPricing": { "02": 66.45, "03": 56.20, "04": 75.35 },
      "stock": { "02": 3, "03": 3, "04": 3 },
      "inStock": true
    },
    {
      "id": 51,
      "name": "Vestido Morango Nozinho",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 133.40,
      "description": "Vestido Morango Nozinho — estampa de moranguinho com nozinho fofo. Tamanhos PP a GG.",
      "image": "assets/moda_junina/Vestido_Morango_Nozinho_1.png",
      "gallery": [
        "assets/moda_junina/Vestido_Morango_Nozinho_1.png",
        "assets/moda_junina/Vestido_Morango_Nozinho_2.png",
        "assets/moda_junina/Vestido_Morango_Nozinho_3.png",
        "assets/moda_junina/Vestido_Morango_Nozinho_4.png"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G", "GG"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 52,
      "name": "Vestido Pet Personalizado",
      "category": "moda-junina",
      "brand": "Jambo",
      "price": 53.15,
      "description": "Vestido Pet Personalizado — peça exclusiva e personalizada para o seu pet brilhar.",
      "image": "assets/moda_junina/VESTIDO_PET_PERSONALIZADO_1.png",
      "gallery": [
        "assets/moda_junina/VESTIDO_PET_PERSONALIZADO_1.png",
        "assets/moda_junina/VESTIDO_PET_PERSONALIZADO_2.png",
        "assets/moda_junina/VESTIDO_PET_PERSONALIZADO_3.png"
      ],
      "badge": "Personalizado",
      "sizes": ["PP", "P", "M", "G", "GG"],
      "sizesPricing": { "PP": 53.15, "P": 62.00, "M": 68.70, "G": 75.35, "GG": 82.15 },
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 53,
      "name": "Vestido Pet Personalizado Barbie",
      "category": "moda-junina",
      "brand": "Jambo",
      "price": 53.15,
      "description": "Vestido Pet Personalizado Barbie — edição especial temática Barbie para o pet mais estiloso.",
      "image": "assets/moda_junina/VESTIDO_PET_PERSONALIZADO_BARBIE_1.png",
      "gallery": [
        "assets/moda_junina/VESTIDO_PET_PERSONALIZADO_BARBIE_1.png",
        "assets/moda_junina/VESTIDO_PET_PERSONALIZADO_BARBIE_2.png",
        "assets/moda_junina/VESTIDO_PET_PERSONALIZADO_BARBIE_3.png"
      ],
      "badge": "Personalizado",
      "sizes": ["PP", "P", "M", "G", "GG"],
      "sizesPricing": { "PP": 53.15, "P": 62.00, "M": 68.70, "G": 75.35, "GG": 82.15 },
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5, "GG": 5 },
      "inStock": true
    },
    {
      "id": 54,
      "name": "Vestido Pirata",
      "category": "moda-junina",
      "brand": "Oh My Dog",
      "price": 93.35,
      "description": "Vestido Pirata — aventura e estilo para o pet que manda no arraial. Tamanhos PP a G.",
      "image": "assets/moda_junina/Vestido_Pirata_A201_1.png",
      "gallery": [
        "assets/moda_junina/Vestido_Pirata_A201_1.png",
        "assets/moda_junina/Vestido_Pirata_A201_3.jpg"
      ],
      "badge": "Festa Junina",
      "sizes": ["PP", "P", "M", "G"],
      "stock": { "PP": 5, "P": 5, "M": 5, "G": 5 },
      "inStock": true
    }
  ]
}
