let btnColorTheme = document.getElementById('color-theme')
let icon = document.getElementById('icon')
icon.style.color = "black"

btnColorTheme.addEventListener('click', (event) => {
    event.preventDefault()

    if (icon.style.color === 'black') {
        icon.style.color = "white"
        document.body.style.background = "rgb(29, 29, 29)"
        document.body.style.color = "#fff"  
        return
    }

        icon.style.color = "black"
        document.body.style.background = "#fff"
        document.body.style.color = "#000"   
})