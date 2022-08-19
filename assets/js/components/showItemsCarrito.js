import { cart } from "./addProductCarrito.js";
export function showItemsCarrito(){
  let btnCheckout = document.getElementById("cart-checkout");
    let contenedor = document.querySelector(".cart--contenedor");
    let fragment = ``;
    if(cart.length === 0){
        fragment = `
        <div class="cart__empty">
            <img src="./assets/images/empty-cart.png" alt="empty cart">
            <h2>Your cart is empty</h2>
          </div>
        `;
        btnCheckout.disabled = true;
    }
    else{
        cart.map((productoCarr)=>{
          btnCheckout.disabled = false;
            fragment += `
            <article class="cart--card">
            <div class="cart--box">
              <img src="${productoCarr.image}" alt="Hoodies" class="cart--imagen">
            </div>
    
            <div class="cart--details">
              <h3 class="cart--titulo">${productoCarr.name}</h3>
              <span class="cart--stock">Stock: ${productoCarr.quantity} | <span class="cart--precio">$${productoCarr.price}</span></span>
              <span class="cart--subtotal">
                Subtotal: ${(productoCarr.price * productoCarr.seleccionado)}
              </span>
    
              <div class="cart--monto">
                <div class="cart--monto-contenido">
                  <span class="cart--monto-box minus" data-id="1">
                    <i class="bx bx-minus"></i>
                  </span>
    
                  <span class="cart--monto-number">${productoCarr.seleccionado} units</span>
    
                  <span class="cart--monto-box plus" data-id="1">
                    <i class="bx bx-plus"></i>
                  </span>
                </div>
    
                <i class="bx bx-trash-alt cart--monto-basurero" data-id="1"></i>
              </div>
            </div>
          </article>
            `;
        });
    }
    

    btnCheckout.addEventListener("click", e=>{
      let fragment2
      fragment2 = `
      <div class="cart__empty">
          <img src="./assets/images/empty-cart.png" alt="empty cart">
          <h2>Your cart is empty</h2>
        </div>
      `;
      btnCheckout.disabled = true;
      contenedor.innerHTML=(fragment2);
    })

    contenedor.innerHTML=(fragment);
}