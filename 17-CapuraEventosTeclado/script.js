let keyNameContainer = document.getElementById("keyNameContainer")
let keyCodeContainer = document.getElementById("keyCodeContainer")

window.addEventListener("keyup", function (event) {
    document.querySelector(".text").style.display = "flex"
    document.querySelector(".text2").style.display = "flex"
    keyNameContainer.style.display = "flex"
    keyCodeContainer.style.display = "flex"

    const keyName = document.createElement("div")
    keyName.setAttribute('class', 'keyNameElement')
    keyName.innerHTML = `<span><i>${event.key}</i></span>`
    keyNameContainer.appendChild(keyName)

    const keyCode = document.createElement("div")
    keyCode.setAttribute('class', 'keyCode')
    keyCode.innerHTML = `<span><i>${event.code}</i></span>`
    keyCodeContainer.appendChild(keyCode)
    
    console.log(`A tecla pressionada foi "${event.key}" e o evento foi "${event.code}"`)
})
