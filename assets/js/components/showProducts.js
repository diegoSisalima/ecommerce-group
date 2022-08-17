export function showProducts(products) {//va a recibir el arreglo de los productos
    //va a generar html por cada producto existente
    let contenedor = document.querySelector("#productos--contenido");
    let fragment = ``
    products.map( product => {
        fragment += `
        <article class="productos--card hoodies">
            <div class="productos--shape">
              <img src="${product.image}" alt="Hoodies" class="productos--img">
            </div>
            <div class="productos--data" id="${product.id}">
              <h2 class="productos--price">$${product.price} <span class="productos--quantity">| Stock: ${product.quantity} </span></h2>
              <h3 class="productos--name">${product.name}</h3>

              <button class="button productos--button">🛒</button>
            </div>
          </article>
        ` 
    } )
    contenedor.innerHTML = fragment;
}

 /*
   {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    }
 
*/