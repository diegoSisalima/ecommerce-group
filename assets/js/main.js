import { loadd } from './components/loadd.js'
import { modoOscuro } from './components/modoOscuro.js'
import { items } from './data/db.js'
import { showProducts } from './components/showProducts.js'

document.addEventListener( "DOMContentLoaded", () =>{
    loadd();
    modoOscuro();
    showProducts(items);
})