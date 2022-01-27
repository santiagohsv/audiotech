export const productos = [{
  id : 1,
  name: "Monitores de campo cercano Focal Shape 50",
  longDescription:"Focal Shape 50 es el monitor versátil de referencia de la serie Shape. Es un monitor que puede ser usado a una distancia de escucha de 80 cm y que tiene una respuesta en graves bastante extensa (50 Hz) considerando su tamaño compacto.  Diseñada para cumplir las necesidades de monitoreo cercano, los monitores Shape combinan un ingenioso diseño y numerosas configuraciones optimizadas para la escucha en salas pequeñas.",
  description: "Monitor de campo cercano.",
  specs: ["Respuesta en frecuencia: (+/-3dB) 50Hz - 35kHz ","Entradas: Tipo XLR / Conectores RCA", "Amplificador de graves y medios: 60W, class AB", "Amplificador de agudos: 25W, class AB"],
  precio: 70000,
  img: "https://cdn.microfusa.com/tienda/pub/media/catalog/product/cache/9b39566d0fce21135c17821fee791bfd/f/o/focal-shape-65_79094_1_1.jpg",
  stock: 10,
},
{
  id : 2,
  name: "Interfaz Universal Audio Apollo X4 Heritage Edition",
  longDescription:"Apollo x4 Heritage Edition es una edición especial de la interfaz de audio Thnderbolt 3, con 12 entradas, 18 salidas y procesamiento UAD QUAD Core en tiempo real y 4 previos de Micrófono Unison. Apta para Mac y Windows. Apollo x4 Heritage Edition tiene todos los beneficios del popular Apollo x4, incluida la conversión de audio A/D y D/A UA líder en su clase, procesamiento de plug-ins UAD QUAD Core en tiempo real, dos preamplificadores de micrófono Unison y LUNA Recording System. Pero esta edición va un paso más allá, con un paquete de software de 10 potentes plug-ins UAD que incluyen colecciones completas de Teletronix, Pultec, Fairchild, Helios y UA.",
  description:"Universal Audio Apollo X4 Heritage Edition",
  specs: ["Respuesta en frecuencia: (+/-3dB) 50Hz - 35kHz ","Entradas: Tipo XLR / Conectores RCA", "Amplificador de graves y medios: 60W, class AB", "Amplificador de agudos: 25W, class AB"],
  precio: 8000,
  img: "https://cdn.microfusa.com/tienda/pub/media/catalog/product/cache/9b39566d0fce21135c17821fee791bfd/a/p/apollo_x4_front_ml_1_1.jpg",
  stock: 5,

},{
  id : 3,
  name: "Auriculares AKG K-701V",
  longDescription: "Akg K 701 auriculares dinámicos para estudio profesional. ideales para tareas de monitorización y mezcla. Los AKG K 701 ofrecen gran amplitud así como un sonido natural. Podrás realizar largas sesiones de trabajo sin fatigar tus oídos. Poseen diadema con acolchamiento de cuero ajustable y arcos de aluminio para mayor resistencia. Son unos auriculares muy ligeros que cubrirán todas tus exigencias.",
  description: "Auriculares de estudio",
  specs: ["Respuesta en frecuencia: (+/-3dB) 50Hz - 35kHz ","Entradas: Tipo XLR / Conectores RCA", "Amplificador de graves y medios: 60W, class AB", "Amplificador de agudos: 25W, class AB"],
  precio: 24860.99,
  img: "https://cdn.microfusa.com/tienda/pub/media/catalog/product/cache/9b39566d0fce21135c17821fee791bfd/a/p/apollo-x4-heritage.jpg"
}]

  export function getProductos() {
    return new Promise ((resolve)=>{
      setTimeout(()=>resolve(productos),2000);
    });
  };

  export function getItem() {
    return new Promise ((resolve)=>{
      setTimeout(()=>resolve(productos[0]),2000);
    });
  };

