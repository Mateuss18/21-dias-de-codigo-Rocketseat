particlesJS('particles-js', {
    particles: {
        number: { value: 256, density: { enable: true, value_area: 800 } },
        color: { value: '#e8e8e8' },
        shape: {
            type: 'polygon',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 12 },
            image: { src: 'img/github.svg', width: 100, height: 100 }
        },
        opacity: {
            value: 0.24463576890600452,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 9,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: '#ffffff',
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'bottom',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'bubble' },
            onclick: { enable: true, mode: 'repulse' },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
})
var count_particles, stats, update
stats = new Stats()
stats.setMode(0)
stats.domElement.style.position = 'absolute'
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px'
requestAnimationFrame(update)
