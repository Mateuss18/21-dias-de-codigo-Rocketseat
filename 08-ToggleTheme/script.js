const toggleButton = document.querySelector('.toggleButton')
const root = document.querySelector(":root")

function changeBackground(){
    if(toggleButton.checked == true){
        document.body.style.backgroundColor = 'rgb(36, 36, 36)'
        root.style.setProperty("--bg", 'rgb(36, 36, 36)')
    }
    else{
        document.body.style.backgroundColor = 'rgb(236, 236, 236)'
        root.style.setProperty("--bg", 'rgb(236, 236, 236)')
    }
}