document.addEventListener("DOMContentLoaded", e => {
    document.addEventListener("scroll", e=> {
        // Opening Page
        document.querySelector('.scrollTip').style.opacity = "0"
        document.querySelector(".openingPage").style.opacity = Math.max(0, 1 - (window.scrollY/window.innerHeight) * .9)

        //Animation Page Transition (STARTS AT 100vh SHIFTED TO 50vh)
        let animationsPage = document.querySelector('.animationsPage')
        animationsPage.style.marginTop = 100 - window.scrollY/window.innerHeight * 90 + 'vh'
    })

    // Copy and setup onclick link
    document.querySelectorAll('.slideshowItemSet').forEach(element => {
        let parent = element.parentElement
        for(let child of element.childNodes) {
            // Copy for carosuel effect
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
            // add links
            console.log(child.dataset.link)
            if (child.dataset.link !== undefined) {
                child.onclick = () => window.location.href = child.dataset.link
                newChild.onclick = () => window.location.href =  child.dataset.link
            }



        }

    })

})