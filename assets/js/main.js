import { loadd } from './components/loadd.js'
import { modoOscuro } from './components/modoOscuro.js'
import { items } from './data/db.js'
import { showProducts } from './components/showProducts.js'
import { showCarrito } from './components/showCarrito.js'
import { showItemsCarrito } from './components/showItemsCarrito.js'

document.addEventListener( "DOMContentLoaded", () =>{
    loadd();
    modoOscuro();
    showCarrito();
    showProducts(items);
    showItemsCarrito();
})