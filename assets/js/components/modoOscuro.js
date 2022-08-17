export function modoOscuro() {
    const themeButton = document.getElementById( "theme-button" )

    themeButton.addEventListener( "click", () =>{
        document.body.classList.toggle( "tema-oscuro" )

        if( themeButton.classList.contains( "bx-moon" ) ){
            themeButton.classList.replace( "bx-moon", "bx-sun" )
        }else{
            themeButton.classList.replace( "bx-sun", "bx-moon" )
        }
    })
}
