let audios = [
    {caminho: 'audios/cavalo.mp3', legenda: 'Cavalo'},
    {caminho: 'audios/dingdoung.mp3', legenda: 'Ding Doung'},
    {caminho: 'audios/iliketurtles.mp3', legenda: 'I Like Turtles'},
    {caminho: 'audios/levelup.mp3', legenda: 'Level Up'},
    {caminho: 'audios/mario.mp3', legenda: 'Mario'},
    {caminho: 'audios/nop.mp3', legenda: 'Nop'},
    {caminho: 'audios/quack.mp3', legenda: 'Quack'},
    {caminho: 'audios/tuturu.mp3', legenda: 'Tuturu'},
    {caminho: 'audios/wrong.mp3', legenda: 'Wrong'},
]

let botoes = document.querySelectorAll('.botao')
let legendas = document.querySelectorAll('p')

for(let i=0; i<9; i++) {
    legendas[i].textContent = audios[i].legenda
    botoes[i].setAttribute('data-item', i)
}

let audioTag = document.querySelector('audio')

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')]
        audioTag.setAttribute('src', som.caminho)
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play()
        }) 
    })
})