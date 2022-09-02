const quizData = [
    {
        question: 'Qual desses abaixo não é uma linguagem de programação?',
        a: 'a) JavaScript',
        b: 'b) Php',
        c: 'c) Python',
        d: 'd) HTML',
        e: 'e) Go',
        correct: 'd'
    },
    {
        question: 'O que significa da sigla HTML?',
        a: 'a) Hiper Text Mult Languege',
        b: 'b) Hypertext Market Label',
        c: 'c) Hypertext Markup Language',
        d: 'd) Hypersonic Text Markup Language',
        e: 'e) Hypertoxic Multi Label',
        correct: 'c'
    },
    {
        question: 'Qual dessas propriedades CSS não existem?',
        a: 'a) Font-display',
        b: 'b) Font-size',
        c: 'c) Font-weight',
        d: 'd) Font-style',
        e: 'e) Font-color',
        correct: 'e'
    },
    {
        question:
            'Qual será o valor da variável A em Javascript: var A = 5 * 5 + 2;',
        a: 'a) 25',
        b: 'b) 27',
        c: 'c) 50',
        d: 'd) 55',
        e: 'e) Nenhuma das acima',
        correct: 'b'
    },
    {
        question:
            'Das alternativas abaixo qual delas NÃO representa a forma correta de se declarar uma variavel em Javascript:',
        a: 'a) type',
        b: 'b) var',
        c: 'c) let',
        d: 'd) int',
        e: 'e) a e d',
        correct: 'e'
    }
]

const questionEl = document.getElementById('question-name')
const quiz = document.getElementById('quiz')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')
const answerEls = document.querySelectorAll('.answer')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

// Pegar a alternativa selecionada
function getSelected() {
    let answer = undefined

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

//Função para desselecionar
function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2 class="finalMessage">Você acertou corretamente <span class="corrects">${score}</span> de ${quizData.length} questões. </h2> <button onClick="window.location.reload()" class="btn">Recomeçar</button>`
        }
    }
})
