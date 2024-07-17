

window.addEventListener("DOMContentLoaded", () => {
    var lastPos = 0
    var startDiv = document.querySelector('#startDiv')
    var leftDiv = document.querySelector('#leftDiv')
    var rightDiv = document.querySelector('#rightDiv')
    var backDiv = document.querySelector('#rightDiv')
    window.addEventListener('scroll', e => {
       startDiv.style.height = `${Math.max((window.innerHeight * 1.1) - (window.scrollY/2),0)}px`
       if(window.scrollY > window.innerHeight * 1.1) {
        leftDiv.style.paddingRight = `${Math.max(0, (window.scrollY - window.innerHeight * 1.1)/10)}%`
        rightDiv.style.paddingLeft = `${Math.max(0,(window.scrollY - window.innerHeight * 1.1)/10)}%`
            
       }
       else {
        leftDiv.style.paddingRight = 0
        rightDiv.style.paddingLeft = 0
       }
    })

})