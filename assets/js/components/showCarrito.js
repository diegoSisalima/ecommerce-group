export function showCarrito() {
    
    const cartOpen = document.getElementById("cart-shop")
    const cartClose = document.getElementById("cart-close")
    const cartContainer = document.getElementById("cart-id")

    cartOpen.addEventListener("click", () => {
        cartContainer.classList.add("show-cart")
    })

    cartClose.addEventListener("click", () => {
        cartContainer.classList.remove("show-cart")
    })
}