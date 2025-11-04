export default [
  {
    id: 100,
    name: "Abrigo Salome",
    price: 350,
    variants: [
      { color: "#171c4fff", colorName: "Azul Marino", image: `${import.meta.env.BASE_URL}img/Abrigos/Salome/Salome-am.png` },
      { color: "#ede8d0", colorName: "Beige", image: `${import.meta.env.BASE_URL}img/Abrigos/Salome/Salome-b.jpg` },
      { color: "#cd8b45ff", colorName: "Vicuña", image: `${import.meta.env.BASE_URL}img/Abrigos/Salome/Salome-v.jpg` },
      { color: "#DD969C", colorName: "Palo de rosa", image: `${import.meta.env.BASE_URL}img/Abrigos/Salome/Salome-pr.png` },
      { color: "#B11A43", colorName: "Fucsia", image: `${import.meta.env.BASE_URL}img/Abrigos/Salome/Salome-f.png` }
    ],
    sizes: ["36", "38","40","42","44","46"]
  },
  {
    id: 2,
    price: 388,
    name: "Abrigo Juana",
    variants: [
      { color: "#bca03bff", colorName: "Mostaza", image: `${import.meta.env.BASE_URL}img/Abrigos/Juana/mostaza.jpg` },
      { color: "#a05a29ff", colorName: "Ladrillo", image: `${import.meta.env.BASE_URL}img/Abrigos/Juana/ladrillo.jpg` }
    ],
    sizes: ["36", "38","40","42","44","46"],
    category: "Abrigos"
  },
  {
    id: 7,
    name: "Blazer Cardigan - 3/4",
    price: 378,
    variants: [
      { color: "#090c67ff", colorName: "Azul Aviador", image: `${import.meta.env.BASE_URL}img/Blazers/Cardigan34/azul-av.png` },
      { color: "#15123dff", colorName: "Azul Marino", image: `${import.meta.env.BASE_URL}img/Blazers/Cardigan34/azul-m.png` },
      { color: "#ede8d0", colorName: "Beige", image: `${import.meta.env.BASE_URL}img/Blazers/Cardigan34/beige.png` },
      { color: "#ac1b61ff", colorName: "Fucsia", image: `${import.meta.env.BASE_URL}img/Blazers/Cardigan34/fucsia.png` },
      { color: "#000000ff", colorName: "Negro", image: `${import.meta.env.BASE_URL}img/Blazers/Cardigan34/negro.png` },
      { color: "#DD969C", colorName: "Palo de Rosa", image: `${import.meta.env.BASE_URL}img/Blazers/Cardigan34/palo-rosa.png` },
      { color: "#ff0000ff", colorName: "Rojo", image: `${import.meta.env.BASE_URL}img/Blazers/Cardigan34/rojo.png` },
      { color: "#025c00ff", colorName: "Verde", image: `${import.meta.env.BASE_URL}img/Blazers/Cardigan34/verde.png` }
    ],
    sizes: [" S", "M", "L", "XL", "2XL"],
    category: "Blazer"
  },
  {
    id: 17,
    price: 138,
    name: "Blusa Floreada cuello cadete con pretina",
    variants: [
      { color: "#ffffffff", colorName: "Blanco", image: `${import.meta.env.BASE_URL}img/Blusas/Floreada-cadete-pretina/blanco.png` },
      { color: "#190e58ff", colorName: "Azul", image: `${import.meta.env.BASE_URL}img/Blusas/Floreada-cadete-pretina/azul.png` },
      { color: "#4b1129ff", colorName: "Guindo", image: `${import.meta.env.BASE_URL}img/Blusas/Floreada-cadete-pretina/guindo.png` },
      { color: "#EAE0C8", colorName: "Perla", image: `${import.meta.env.BASE_URL}img/Blusas/Floreada-cadete-pretina/perla.png` }
    ],
    sizes: ["S","M", "L", "XL"],
    category: "Blusas"
  },
  {
    id: 21,
    price: 228,
    name: "Pantalon palazo con cinturon",
    variants: [
      { color: "#2200ffff", colorName: "Azul electrico", image: `${import.meta.env.BASE_URL}img/Pantalon/Palazo-cinturon/azul-e.png` }
    ],
    sizes: ["38","40","42","44"],
    category: "Pantalon"
  }
]