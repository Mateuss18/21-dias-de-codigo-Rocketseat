const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const alertSong = new Audio('../assets/ding-alert.mp3')

let minutes = 0
let seconds = 0

let timer

function startTimer() {
    start.style.display = 'none'
    pause.style.display = 'inline'

    timer = setInterval(counter, 1)
}

function pauseTimer() {
    start.style.display = 'inline'
    pause.style.display = 'none'

    clearInterval(timer)
}

function resetTimer() {
    start.style.display = 'inline'
    pause.style.display = 'none'
    clearInterval(timer)
    minutes = 0
    seconds = 0

    document.querySelector('.counter').innerText = '00:00'
}

function counter() {
    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++
    }
    if (minutes == 25) {
        alertSong.play()
        pauseTimer()
        start.addEventListener('click', event => {
            minutes = 0
            seconds = 0
        })
    }

    var format =
        (minutes < 10 ? '0' + minutes : minutes) +
        ':' +
        (seconds < 10 ? '0' + seconds : seconds)
    document.querySelector('.counter').innerText = format
}
