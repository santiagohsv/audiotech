export const productos = [{
    id : 1,
    name: "Headphones",
    description: "Wireless Headphones",
    precio: 7000,
  }
  ,  {
    id: 2,
    name: "RCA Clable",
    description: "RCA Clable 2ft ",
    precio: 3000,
  }
  ,     {
    id: 3,
    name: "EQ",
    description: "7 Band Equalizer",
    precio: 1000,
  } 
  ];

  /*
  export const getProductos = ()=>{
    return new Promise ((resolve, reject)=>{
      setTimeout(()=>resolve(productos),5000);
    });
  };

  */

  export function getProductos() {
    return new Promise ((resolve)=>{
      setTimeout(()=>resolve(productos),2000);
    });
  };

