import { showProducts } from "./showProducts.js";
import { showItemsCarrito } from "./showItemsCarrito.js";

let contador = 0;
export const cart = [];

export function addProductCarrito(items) {
  /*--- UBICACIONES EN EL DOM --- */
  /*--- contador del carrito*/
  const contadorCarrito = document.querySelector("#cart-cont")
  /*--- botones de agregar al carrito de  cada producto */
  const btns = document.querySelectorAll(".productos--button")//devuelve un node list (arreglo con todos los botones)
  /*--- Stock de cada producto */
  const stock = document.querySelector(".productos--quantity");
  /*--- total de items dentro del carrito */
  let itemsTotal = document.querySelector("#items-cont");
  /*--- total a pagar ---*/
  let cartTotal = document.getElementById("cart-total");

  btns.forEach((button) => {
    button.addEventListener("click", e => {

      const id = parseInt(e.target.parentElement.id);//almaceno el id
      const selectedProduct = items.find(item => item.id === id); //busco el producto selcionado con el id
      contador = contador + 1;//incremento el contador
      contadorCarrito.textContent = contador;//muestro el contador en el icono del carrito
      itemsTotal.textContent = contador; //muestro el total dentro de la card del carrito
      items[id - 1].quantity--;//actulizo la cantidad del producto segun su id
      showProducts(items);


      /*Ubicación del producto en elarreglo */
      let index = cart.indexOf(selectedProduct);
      if (index === -1) {
        selectedProduct.seleccionado = 1;
        cart.push(selectedProduct);

      } else {
        cart[index].seleccionado++;
        cart[index].quantity--;
        console.log(typeof (cart[index].quantity--));
        console.log(cart[index]);
      }
      console.log(cart);
      showItemsCarrito();

      const totalPago = cart.reduce((total, product) => {
        return (total + (product.seleccionado * product.price));
      }, 0);
      cartTotal.textContent = `$${totalPago}`;

    })
  })
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