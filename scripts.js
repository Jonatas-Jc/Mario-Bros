const form = document.querySelector('.form')
const mask = document.querySelector('.form-mask')

function formClick(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function maskBack(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"
}