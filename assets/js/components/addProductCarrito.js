export function addProductCarrito(items) {
  const contadorCarrito = document.querySelector("#cart-cont")
    const btns = document.querySelectorAll(".productos--button")//devuelve un node list (arreglo con todos los botones)
   
    
    
    
    /*const cart = [];
    let contenedor = document.querySelector("#cart-id");
    let fragment = ``
    */
   let contador=0;
    btns.forEach((button) => {
        button.addEventListener("click", e => {
            const id = parseInt(e.target.parentElement.id);//almaceno el id
            const selectedProduct = items.find(item => item.id === id); //busco el producto selcionado con el id
            //cart.push(selectedProduct); //añadimos al arreglo carrito          
            contador = contador + 1;
            selectedProduct.quantity = selectedProduct.quantity - 1;
            contadorCarrito.textContent = contador;  
            //console.log(contadorCarrito);
            //console.log(contador);        

            let cartTotal = document.querySelector("#items-cont");
            cartTotal.textContent = contador;
        })
    })
    //console.log(cart);
};

/*
   fragment += `
            <article class="cart--card">
            <div class="cart--box">
              <img src="${selectedProduct.image}" alt="Shirts" class="cart--imagen">
            </div>
    
            <div class="cart--details">
              <h3 class="cart--titulo">${selectedProduct.category}</h3>
              <span class="cart--stock">Stock: ${selectedProduct.quantity} | <span class="cart--precio">$${selectedProduct.price}</span></span>
              <span class="cart--subtotal">
                Subtotal: $xxsubtotal
              </span>
    
              <div class="cart--monto">
                <div class="cart--monto-contenido">
                  <span class="cart--monto-box minus" data-id="2">
                    <i class="bx bx-minus"></i>
                  </span>
    
                  <span class="cart--monto-number">xxmonto units</span>
    
                  <span class="cart--monto-box plus" data-id="2">
                    <i class="bx bx-plus"></i>
                  </span>
                </div>
    
                <i class="bx bx-trash-alt cart--monto-basurero" data-id="2"></i>
              </div>
            </div>
          </article>
            `;
            //cartProducts( cart )
            contenedor.innerHTML = fragment;
*/