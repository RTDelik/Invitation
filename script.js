function dia() {
    let boy = document.querySelector('.boy')
    let igrok = document.querySelector('.igrok')
    let dialogBoy = document.querySelector('.dialog.d1')
    let dialogIgrok = document.querySelector('.dialog.d2')
    let currentLevel = document.elementFromPoint(igrok.offsetLeft, igrok.offsetTop).parentElement
    while (currentLevel.classList.value.slice(0, 5) != 'local') {
        currentLevel = currentLevel.parentElement
    }
    console.log(currentLevel)
    let dialog = document.createElement('div')
    dialog.className = 'dialog'
    dialog.classList.add('d1')
    dialog.style.left = boy.offsetLeft + shag + 'px'
    dialog.style.top = boy.offsetTop - shag + 'px'
    dialog.hidden = true
    currentLevel.appendChild(dialog)
    
    dialog = document.createElement('div')
    dialog.className = 'dialog'
    dialog.hidden = true
    dialog.classList.add('d2')
    // dialog.style.left = igrok.offsetLeft + shag + 'px'
    // dialog.style.top = igrok.offsetTop - shag + 'px'
    currentLevel.appendChild(dialog)
    
    document.removeEventListener('keydown', eventKeyDown)
    document.removeEventListener('keyup', eventKeyUp)
    // console.log(boy, igrok)

    let masDialog = [['Походу ты куда-то не туда свернула?', 500],
    ['Я ждал тебя раньше.', 4000], ['Даже вздревнуть успел.', 7000], ['exit', 11000]]
    masDialog.forEach((e, i) => {
        setTimeout(say, e[1], e[0])
    })
    function say(e) {
        let boy = document.querySelector('.boy')
    let igrok = document.querySelector('.igrok')
    let dialogBoy = document.querySelector('.dialog.d1')
    let dialogIgrok = document.querySelector('.dialog.d2')

        if (e == 'exit') {
            dialogBoy.innerHTML = ''
            igrok.classList.add('animation')
            igrok.style.top = boy.offsetTop + 'px'
            dialogBoy.hidden = true
            dia2()
        } else {
            dialogBoy.hidden = false
            // console.log(e)
            dialogBoy.innerHTML = `<p>${e}</p>`

        }
    }
}
function dia2() {
    let boy = document.querySelector('.boy')
    let igrok = document.querySelector('.igrok')
    let dialogBoy = document.querySelector('.dialog.d1')
    let dialogIgrok = document.querySelector('.dialog.d2')
    
    let masDialog = [['?#@&', 5000],
    ['exit', 8000]]
    masDialog.forEach((e, i) => {
        setTimeout(say, e[1], e[0])
    })
    function say(e) {
        let boy = document.querySelector('.boy')
    let igrok = document.querySelector('.igrok')
    let dialogBoy = document.querySelector('.dialog.d1')
    let dialogIgrok = document.querySelector('.dialog.d2')
        
        dialogIgrok.style.left = igrok.offsetLeft - shag * 8 + 'px'
        dialogIgrok.style.top = igrok.offsetTop - shag*2 + 'px'
        if (e == 'exit') {
            dialogIgrok.innerHTML = ''
            dialogIgrok.hidden = true
            dia3()
        } else {
            dialogIgrok.hidden = false
            dialogIgrok.innerHTML = `<p>${e}</p>`
        }
    }
}
function dia3() {
    let boy = document.querySelector('.boy')
    let igrok = document.querySelector('.igrok')
    let dialogBoy = document.querySelector('.dialog.d1')
    let dialogIgrok = document.querySelector('.dialog.d2')
    let masDialog = [
    ['Мы с тобою проделали длинный путь,',500],
    ['Прошли через многое,',3000],
    ['Затеяли масштабный и грандиозный ремонт',6000],
    ['Которому нет ни конца не края,',10000],
    ['И знаешь,',14000],
    ['Говорят, что жизнь коротка,',17000],
    ['Но мы с тобою успеем всё…',20500],
    ['Что ты смотришь в экран с таким взглядом?',24000],
    ['Да, это оно и есть…',28500],
    ['ring',32500],
    ['Ты выйдешь за меня?', 32500],
    ['exit', 43000]]
    masDialog.forEach((e, i) => {
        setTimeout(say, e[1], e[0])
    })
    function say(e) {
        let boy = document.querySelector('.boy')
    let igrok = document.querySelector('.igrok')
    let dialogBoy = document.querySelector('.dialog.d1')
    let dialogIgrok = document.querySelector('.dialog.d2')
        let dialog = document.querySelector('.dialog.d1')
        dialog.style.left = boy.offsetLeft + shag + 'px'
        dialog.style.top = boy.offsetTop - shag + 'px'
        if (e == 'exit') {
            dialogBoy.innerHTML = ''
            dialogBoy.hidden = true
            otvet()
        } 
        if (e == 'ring') {
            document.querySelector('.Ring').style.display = 'initial'

        }
        else {
            dialogBoy.hidden = false
            // document.querySelector('.Ring').style.display = 'initial'
            dialogBoy.innerHTML = `<p>${e}</p>`
        }
    }
}
function otvet() {
    let okno = document.querySelector('.otvet')
    okno.style.display = 'initial'

}
let okno = document.createElement('div')
okno.className = 'otvet'
okno.style.backgroundColor = 'rgba(48, 49, 48, 0.479)'
okno.style.display = 'none'
let pole = document.createElement('div')
pole.className = 'pole'
pole.innerText = `Игра окончена, 
осталось дать ответ?`
let buttonPole = document.createElement('div')
buttonPole.className = 'butPole'
button1 = document.createElement('button')
button1.classList = 'Yes'
button1.innerText = 'Да'
button1.onclick = Yes
buttonPole.appendChild(button1)
button1 = document.createElement('button')
button1.classList = 'No'
button1.innerText = 'Нет'
button1.onclick = No
buttonPole.appendChild(button1)
pole.appendChild(buttonPole)
okno.appendChild(pole)
document.body.appendChild(okno)

function Yes() {
    // alert('ДА')
    okno.innerHTML=''
    // okno.style.display = 'none'
    let text = document.createElement('h2')
    text.innerText = `Ну, осталось только отыскать заветную коробочку с самим подарком!!!
    Ты только сначала примерь, а то вдруг ошибся с размером…`
    let final = document.createElement('img')
final.src = "img/final.jpg"
final.style.width = 100+'%'
final.style.height = 80+'%'
    // final.classList = 'imgFinal'
    okno.appendChild(text)
    okno.appendChild(final)
}
function No() {
    okno.innerHTML=''
    // let pole = document.createElement('div')
pole.innerHTML = ''
pole.innerText = `Мне кажется, ответ поспешен и требует более обдуманного действия…`
let buttonPole = document.createElement('div')
buttonPole.className = 'butPole'
button1 = document.createElement('button')
button1.classList = 'Yes'
button1.innerText = 'Я передумала'
button1.onclick = Yes
buttonPole.appendChild(button1)
button1 = document.createElement('button')
button1.classList = 'No'
button1.innerText = 'Нет'
button1.onclick = No2
buttonPole.appendChild(button1)
pole.appendChild(buttonPole)
okno.appendChild(pole)
}

function No2(){
    okno.innerHTML=''
    // let pole = document.createElement('div')
pole.innerHTML = ''
pole.innerText = `И совершенно уверена в своих намереньях?`
let buttonPole = document.createElement('div')
buttonPole.className = 'butPole'
button1 = document.createElement('button')
button1.classList = 'Yes'
button1.innerText = 'Я передумала'
button1.onclick = Yes
buttonPole.appendChild(button1)
button1 = document.createElement('button')
button1.classList = 'No'
button1.innerText = 'Да. Ни какого замужества.'
button1.onclick = No3
buttonPole.appendChild(button1)
pole.appendChild(buttonPole)
okno.appendChild(pole)
}
function No3(){
    okno.innerHTML=''
    // let pole = document.createElement('div')
pole.innerHTML = ''
pole.innerText = `Последняя попытка...`
let buttonPole = document.createElement('div')
buttonPole.className = 'butPole'
button1 = document.createElement('button')
button1.classList = 'Yes'
button1.innerText = 'Я согласна'
button1.onclick = Yes
buttonPole.appendChild(button1)
button1 = document.createElement('button')
button1.classList = 'No'
button1.innerText = 'Ну ладно, так и быть согласна'
button1.onclick = Yes
buttonPole.appendChild(button1)
pole.appendChild(buttonPole)
okno.appendChild(pole)
}
