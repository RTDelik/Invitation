let shag = 50;
let unitMeas = 'px'
var blokRL, blokR, blokL, blokUD, blokU, blokU2, blokD, blokD2;
let pointRL, pointUD;
let sizeX = document.documentElement.clientWidth
let sizeY = document.documentElement.clientHeight
let sizeXMax = Math.floor(sizeX / shag) * shag
let sizeYMax = Math.floor(sizeY / shag) * shag
let centreX = sizeXMax / 2 - shag
let centreY = sizeYMax / 2 - shag
let leftEdge = centreX - ((Math.floor(centreX / shag)) * shag)
let rightEdge = centreX + ((Math.floor(centreX / shag)) * shag)
let upEdge = centreY - ((Math.floor(centreY / shag)) * shag)
let downEdge = centreY + ((Math.floor(centreY / shag)) * shag)

// console.log(sizeX,sizeY,sizeXMax,downEdge)
// console.log(leftEdge, rightEdge, upEdge, downEdge)

function eventKeyUp(event) {
    let igrok = document.querySelector('.igrok');
    // let igrokBlok = document.elementsFromPoint(igrok.offsetLeft + shag / 2, igrok.offsetTop + shag - 5);
    let exit = eventIgrokElem(igrok.offsetLeft + shag / 2, igrok.offsetTop + shag - 5, 'exit')
    if (exit) {
        exit = exit.classList
        Levels(exit[2], exit[0], exit[1], igrok.offsetLeft, igrok.offsetTop);
        // console.log(exit[0])
    }
    if (event.code != 'KeyF') {
        if (event.code != 'KeyE') {
            let masKey = ['Tree','barn', 'sculpure', 'sculpure-2', 'sculpure-3','pavilion']
            let b;
            masKey.forEach(e => {
                let objectUpObj = eventIgrok(igrok.offsetLeft + 5, igrok.offsetTop - shag / 2, e)
                let objectDownObj = eventIgrok(igrok.offsetLeft + 5, igrok.offsetTop + shag * 2 - 5, e)
                if(objectDownObj||objectUpObj){
                    // console.log(objectDownObj,objectUpObj)
                    if(objectUpObj){
                        // igrok.style.zIndex = 30
                        b = 30
                        // console.log(igrok)
                    }
                    if(objectDownObj || objectDownObj&&objectUpObj){
                        b = 10
                        // igrok.style.zIndex = 10
                    }
                    return b
                }else{
                    igrok.style.zIndex = 10
                }
            })
            igrok.style.zIndex = b
            let objectUp = eventObjectElem(igrok.offsetLeft + 5, igrok.offsetTop - shag / 2, 'All')
            let objectDown = eventObjectElem(igrok.offsetLeft + 5, igrok.offsetTop + shag * 2 - 5, 'All')
            let objectLeft = eventObjectElem(igrok.offsetLeft - shag + 5, igrok.offsetTop + shag, 'All')
            let objectRight = eventObjectElem(igrok.offsetLeft + shag + 5, igrok.offsetTop + shag, 'All')
            let masObject = [objectUp, objectDown, objectLeft, objectRight]
            document.querySelectorAll('.hint').forEach(e => { e.hidden = true })
            // console.log(masObject)
            if (objectUp || objectDown || objectLeft || objectRight) {
                masObject.forEach(e => {
                    if (e) {
                        if (e.classList[1] == 'classHint') {
                            let hint = document.querySelector('.hint')
                            // console.log()
                            hint.style.top = e.offsetTop - shag * 3 + 'px'
                            hint.style.left = e.offsetLeft + 'px'
                            hint.hidden = false
                        }
                    }
                })
            }
        }
    }
}
function blokPos(mas = []) {
    let igrok = document.querySelector('.igrok');
    pointRL = igrok.offsetLeft;
    pointUD = igrok.offsetTop;
    let masobj = ['bench','bench-2','bench-3','bench-4', 'urn', 
    'look-1', 'look-2', 'look-3','poleZ','pot','pot-2','pot-3']
    let masBlok = []
    let masBlok2 = []

    mas.forEach(e => {
        let blok = eventIgrok(pointRL + e[0], pointUD + e[1], 'way')
        if (blok) masBlok.push(true)
        else masBlok.push(false)
    })
    masobj.forEach(elem => {
        mas.forEach(e => {
            let blok = eventIgrok(pointRL + e[0], pointUD + e[1], elem)
            if (blok) masBlok2.push(true)
            else masBlok2.push(false)
        console.log(elem,blok)
        })
    })
    if (masBlok2.includes(true)) { return masBlok = false }
    return masBlok
}

function eventKeyDown(event) {
    // console.log(event.code)
    let igrok = document.querySelector('.igrok');
    let currentLevel = document.elementFromPoint(igrok.offsetLeft, igrok.offsetTop).parentElement
    while (currentLevel.classList.value.slice(0, 5) != 'local') {
        currentLevel = currentLevel.parentElement
    }
    if (!event.repeat) {
        let masblok;
        pointRL = igrok.offsetLeft;
        pointUD = igrok.offsetTop;
        let LetterDialog = document.querySelector('.LetterDialog')
        switch (event.code) {
            case 'ArrowUp':
                masblok = blokPos(mas = [[a = 5, b = -5], [c = shag - 5, d = - 5]])
                pointUD -= shag;
                // console.log(masblok)
                if (pointUD > 0 && (masblok[0] || masblok[1]) && (!masblok[2] || !masblok[3]))
                    igrok.style.top = pointUD + unitMeas;
                break;
            case 'ArrowDown':
                masblok = blokPos(mas = [[a = 5, b = shag * 2], [c = shag - 5, d = shag * 2]])
                pointUD += shag;
                // blokD = eventIgrok(pointRL + 5, pointUD + shag, 'way');
                // blokD2 = eventIgrok(pointRL + shag - 5, pointUD + shag, 'way');
                if (pointUD <= sizeYMax && (masblok[0] || masblok[1]) && (!masblok[2] || !masblok[3]))
                    igrok.style.top = pointUD + unitMeas;
                break;
            case 'ArrowLeft':
                masblok = blokPos(mas = [[a = -shag + 5, b = shag]])
                pointRL -= shag;
                // console.log(masblok)
                // blokL = eventIgrok(pointRL + 5, pointUD + shag, 'way');
                // if (pointRL > 0 && blokL)
                if (pointRL > 0 && masblok[0] && !masblok[1])
                    igrok.style.left = pointRL + unitMeas;
                break;
            case 'ArrowRight':
                masblok = blokPos(mas = [[a = shag * 2 - 5, b = shag]])
                pointRL += shag;
                // console.log(masblok)
                // blokR = eventIgrok(pointRL + shag - 5, pointUD + shag, 'way');
                if (pointRL <= sizeXMax && masblok[0] && !masblok[1])
                    igrok.style.left = pointRL + unitMeas;
                break;
            case 'KeyE':
                let masDialog = currentLevel.querySelectorAll('.Log')
                let log;
                masDialog.forEach(e => {
                    if (!e.hidden) {
                        if (e.classList[1].slice(0, 8) == 'logStart') {
                            e.hidden = true
                            log = currentLevel.querySelector(`.logStart-${Number(e.classList[1].slice(9)) + 1}`)
                        } else if (e.classList[1].slice(0, 7) == 'logTask') {
                            e.hidden = true
                        }
                    }
                })
                if (log) {
                    log.hidden = false
                }
                if (!LetterDialog.hidden) {
                    let nextElem;
                    let masLet = LetterDialog.querySelectorAll('div')
                    for (const key in masLet) {
                        if (Object.hasOwnProperty.call(masLet, key)) {
                            const element = masLet[key];
                            if (!element.hidden) {
                                element.hidden = true
                                index = Number(key) + 1
                                nextElem = masLet[index]
                            }
                        }
                    }
                    if (nextElem) {
                        nextElem.hidden = false
                    } else {
                        LetterDialog.hidden = true
                        LetterDialog.innerHTML = ''
                    }
                }
                break;
            case 'KeyF':
                let objectUp = eventObjectElem(igrok.offsetLeft + 5, igrok.offsetTop - shag / 2, 'All')
                let objectDown = eventObjectElem(igrok.offsetLeft + 5, igrok.offsetTop + shag * 2 - 5, 'All')
                let objectLeft = eventObjectElem(igrok.offsetLeft - shag + 5, igrok.offsetTop + shag, 'All')
                let objectRight = eventObjectElem(igrok.offsetLeft + shag + 5, igrok.offsetTop + shag, 'All')
                let masObject = [objectUp, objectDown, objectLeft, objectRight]
                if (objectUp || objectDown || objectLeft || objectRight) {
                    masObject.forEach(e => {
                        if (e) {
                            if (e.classList[0].slice(0, 3) == 'key') {
                                let eNum = e.classList[0].slice(4)
                                let Num = [1, 2, 3]
                                Num.forEach(elem => {
                                    if (elem == eNum) {
                                        let look = document.querySelector(`.look-${elem}`)
                                        look.hidden = true
                                        document.querySelector('.hint').hidden = true
                                    } else {
                                        let look = document.querySelector(`.look-${elem}`)
                                        look.hidden = false
                                    }
                                })
                                // console.log(look)

                            } else {
                                if (e.classList[1] == 'classHint') {
                                    document.querySelector('.hint').hidden = true
                                    let log = e.querySelector(`.logTask`)
                                    let text = log.innerHTML
                                    log.style.top = -shag * 2 + 'px'
                                    let masLetDia = text.split('<br>')
                                    masLetDia.forEach((elem, i) => {
                                        let div = document.createElement('div')
                                        div.id = 'list-' + i
                                        div.innerText = elem
                                        if (i != 0) div.hidden = true
                                        LetterDialog.appendChild(div)
                                    })
                                    let p = document.createElement('p')
                                    p.innerText = 'Нажми русскую букву «У» чтобы продолжить.'
                                    LetterDialog.appendChild(p)
                                    LetterDialog.style.top = igrok.offsetTop - shag * 4 + 'px'
                                    LetterDialog.style.left = igrok.offsetLeft + shag * 2 + 'px'
                                    LetterDialog.hidden = false
                                    let nextLog = document.querySelector(`#idLeter-${Number(log.id.slice(8)) + 1}`)
                                    nextLog.parentElement.classList.add('classHint')
                                }
                            }
                        }
                    })
                }
                break;
        }
    }
}
document.addEventListener('keydown', eventKeyDown)
document.addEventListener('keyup', eventKeyUp)
