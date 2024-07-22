document.addEventListener("DOMContentLoaded", e => {
    document.addEventListener("scroll", e=> {
        // Opening Page
        document.querySelector('.scrollTip').style.opacity = "0"
        document.querySelector(".openingPage").style.opacity = Math.max(0, 1 - (window.scrollY/window.innerHeight) * 1.6)

        //Animation Page Transition (STARTS AT 100vh SHIFTED TO 50vh)
        let animationsPage = document.querySelector('.animationsPage')
        animationsPage.style.marginTop = 100 - window.scrollY/window.innerHeight * 50 + 'vh'
        document.querySelector('.slideshowTop').style.width = `${Math.min(100, (window.scrollY/window.innerHeight) * 50)/100 * 350 * 5 * 2}px`
        document.querySelector('.slideshowMid').style.width = `${Math.min(100, (window.scrollY/window.innerHeight) * 50)/100 * 350 * 5 * 2}px`
        document.querySelector('.slideshowBot').style.width = `${Math.min(100, (window.scrollY/window.innerHeight) * 50)/100 * 350 * 5 * 2}px`
    })
    document.querySelectorAll('.slideshowItemSet').forEach(element => {
        let parent = element.parentElement
        for(let child of element.childNodes) {
            if (child.nodeType === "text" || child.innerHTML === undefined) {
                continue
            }
            let newChild = document.createElement("div")
            newChild.innerHTML = child.innerHTML
            newChild.className = "slideshowItem"
            for (let childDiv of parent.childNodes) {
                if(childDiv.className === "slideshowItemSetCopy") {
                    childDiv.appendChild(newChild)
                }
            }
        }

    })

})