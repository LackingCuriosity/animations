document.addEventListener("DOMContentLoaded", e => {
    document.addEventListener("scroll", e=> {
        // Opening Page
        document.querySelector('.scrollTip').style.opacity = "0"
        document.querySelector(".openingPage").style.opacity = Math.max(0, 1 - (window.scrollY/window.innerHeight) * 1.6)

        //Animation Page Transition (STARTS AT 100vh SHIFTED TO 50vh)
        let animationsPage = document.querySelector('.animationsPage')
        animationsPage.style.marginTop = 100 - window.scrollY/window.innerHeight * 50 + 'vh'
        document.querySelector('.slideshowTop').style.width = `${Math.min(100, (window.scrollY/window.innerHeight) * 50)}vw`
        document.querySelector('.slideshowMid').style.width = `${Math.min(100, (window.scrollY/window.innerHeight) * 50)}vw`
        document.querySelector('.slideshowBot').style.width = `${Math.min(100, (window.scrollY/window.innerHeight) * 50)}vw`
    })
    document.querySelector('.slideshowTop')

})