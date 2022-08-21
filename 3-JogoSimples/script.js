const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameBoard = document.querySelector('.game-board')
const loseMsg = document.querySelector('.lose-message')
const music = new Audio("../assets/ambiente-music.mp3")
const loseMusic = new Audio("../assets/game-over-music.mp3")
music.loop = true

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace('px', '')
    const cloudsPosition = +window
        .getComputedStyle(clouds)
        .right.replace('px', '')

    music.play()

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        clouds.style.animation = 'none'
        clouds.style.right = `${cloudsPosition}px`

        mario.src = '../assets/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameBoard.style.opacity = '0.3'

        loseMsg.style.display = 'flex'

        loseMusic.play()
        music.pause()
        
        document.addEventListener('keydown', function(event){
            if(event.code === "Space"){
                document.location.reload()
            }
        })

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', function(event){
    if(event.key === "ArrowUp"){
        mario.classList.add('jump')

        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500)
    }
})
