

function creatLevel(option = {
    name: 0,
    display: false,
    textures: {

    },
    objects: {

    },
    exit: {

    }
}, dialogExists = true,
    dialogs = {
        // exists: true,
        display: false,
        type: 'logStart',
        text: 'Введите текст диалога',
        top: downEdge - shag * 4,
        left: rightEdge - shag * 4

    }) {
    let level = document.createElement('div')
    level.className = `local-${option.name}`
    if (option.display) {
        level.style.display = 'none'
    }
    let way = document.createElement('div')
    way.className = 'way'
    // let igrok_loc = document.createElement('div')
    // igrok_loc.className = 'igrok'
    let exit_loc = document.createElement('div')
    exit_loc.className = 'exit'
    let ob = document.createElement('div')
    ob.className = 'object'
    level.appendChild(way)
    level.appendChild(exit_loc)
    level.appendChild(ob)
    if (dialogExists) {
        // console.log('dsdd')
        let dialogLog = document.createElement('div')
        dialogLog.className = `dialog-${option.name}`
        // dialogLog.classList.add(`Lev-${option.name}`)
        level.appendChild(dialogLog)
    }
    // level.appendChild(igrok_loc)
    document.querySelector('body').appendChild(level)
    igrok_start(top = downEdge / shag - 1 - 0.2,
        left = centreX / shag - 2, level)


    option.textures.forEach(element => {
        textura(class_name = element.class_name,
            class_list = element.class_list,
            left = element.left,
            top = element.top,
            width = element.width,
            height = element.height,
            Level = level)
    });
    // console.log(option.objects)
    option.objects.forEach(e => {
        object(class_name = e.class_name,
            class_list = e.class_list,
            left = e.left,
            top = e.top,
            Level = level)
        if (e.point) {
            let pointObject = level.querySelector(`.${e.class_list}`)
            pointObject.classList.add('classHint')
            let pointDialog = document.createElement('div')
            pointDialog.classList = 'Log'
            pointDialog.classList.add(e.point.type)
            pointDialog.hidden = true
            pointDialog.style.left = 200 + "px"
            pointDialog.innerText = e.point.text
            let pointHint = document.createElement('div')
            pointHint.classList = 'hint'
            pointHint.innerText = 'Нажми русскую букву «А».'
            pointHint.hidden = true
            pointObject.appendChild(pointDialog)
            // pointObject.appendChild(pointHint)
        }
    });
    option.exit.forEach(e => {
        exitLevel(e.inLevel,
            e.locationExit,
            e.levelExit,
            e.nameLevel,
            e.width,
            e.height,
            e.top,
            e.left)
    });
        dialogs.forEach((e, i) => {
            dialogLog = document.querySelector(`.dialog-${option.name}`)
            let diaLog = document.createElement('div')
            diaLog.classList.add(`Log`)
            diaLog.classList.add(e.type + '-' + i)
            diaLog.hidden = e.display
            diaLog.innerText = e.text
            diaLog.style.top = e.top + 'px'
            diaLog.style.left = e.left + 'px'
            dialogLog.appendChild(diaLog)
        })
}
function blokMotion(blokClass,n) {
    let f = document.querySelectorAll(`.${blokClass}`)
    for (const key in f) {
        if (Object.hasOwnProperty.call(f, key)) {
            const element = f[key]
            let g = Number(element.style.top.slice(0, -2)) + shag
            let poleZ = document.createElement('div')
            poleZ.className = 'poleZ'
            poleZ.style.top = g + 'px'
            poleZ.style.width = shag*n + 'px'

            element.appendChild(poleZ)
            // console.log(element)
        }
    }
}

function eventIgrok(left, top, classParent) {
    let position = document.elementsFromPoint(left, top);
    let t;
    position.forEach(e => {
        if(e.classList.value == classParent){
            // console.log(e)
            t = e
        }else{

            if(e.classList.value){
                while (e.classList.value != classParent) {
                    if(e.nodeName == 'HTML'){
                        // t=false
                        break
                    }else{
                        e = e.parentElement
                        if(e.classList.value == classParent){
                            // console.log(e)
                            t = e
                            break
                        }
                    }
                };
            }
        }
    })
    return t
}
function eventIgrokElem(left, top, classParent) {
    let position = document.elementsFromPoint(left, top);
    let t;
    position.forEach(e => {
        if (e.parentElement) {
            // console.log(e.parentElement)
            if (e.parentElement.classList.value == classParent) {
                t = e
            }
        }
    })
    return t
}
function eventObjectElem(left, top, classParent) {
    let position = document.elementsFromPoint(left, top);
    let t;
    // console.log(position)
    position.forEach(e => {
        let elem = e.parentElement
        if (elem && elem.classList.value == classParent) {
                t = e
        }
    })
    return t
}


function tropa(loc, width = 1, height = 1, top = 10, left = 10) {
    let numberTropa = document.querySelector('.tropa').childElementCount + 1
    // console.log(numberTropa+1)
    let tropa = document.createElement('div')
    tropa.className = 'tropa' + numberTropa
    tropa.style.width = shag * width + unitMeas
    tropa.style.height = shag * height + unitMeas
    tropa.style.top = shag * top + unitMeas
    tropa.style.left = shag * left + unitMeas
    tropa.style.position = 'fixed'
    document.querySelector(`.${loc} >.tropa`).appendChild(tropa)
}

function igrok_start(top = 10, left = 10,level) {

    let igrok = document.querySelector(`.igrok`)
    if (!igrok) {
        igrok = document.createElement('div')
        igrok.className = 'igrok'
        level.appendChild(igrok)
    }
    igrok.style.width = shag + unitMeas
    igrok.style.height = shag + unitMeas
    igrok.style.top = shag * top + unitMeas
    igrok.style.left = shag * left + unitMeas
}

function exitLevel(inLevel = 1, locationExit = 'Up', levelExit = 0, nameLevel = 'Уровень', width = 1, height = 1, top = 10, left = 10) {
    let exit = document.querySelector(`.local-${levelExit} > .exit`)
    // console.log(top, left)
    let exitLevel = document.createElement('div')
    exitLevel.classList = 'LevIn-' + inLevel
    exitLevel.classList.add(locationExit)
    exitLevel.classList.add('LevOut-' + levelExit)

    // exitLevel.id = `local-${exit.childElementCount+1}`
    exitLevel.style.position = 'fixed'
    exitLevel.style.width = shag * width + unitMeas
    exitLevel.style.height = shag * height + unitMeas
    exitLevel.style.top = shag * top + unitMeas
    exitLevel.style.left = shag * left + unitMeas
    exitLevel.innerText = nameLevel
    exit.appendChild(exitLevel)
}

function Levels(levelOut, levelInput, exitLocation, left = 0, top = 0) {
    let locLevInput = document.querySelector(`.local-${levelInput.slice(6)}`)
    let locLevOut = document.querySelector(`.local-${levelOut.slice(7)}`)
    let igrok = document.querySelector('.igrok')
    locLevOut.style.display = 'none'
    locLevInput.style.display = 'initial'
    // console.log(`.LevIn-${levelOut[7]}.LevOut${levelInput[6]}`)
    let exit = document.querySelector(`.LevIn-${levelOut.slice(7)}.LevOut-${levelInput.slice(6)}`)
    locLevInput.appendChild(igrok)
    console.log(levelInput)
    
    switch (exitLocation) {
        case 'Up':
            igrok.style.left = left + unitMeas;
            igrok.style.top = exit.offsetTop - shag - shag * 0.2 + unitMeas;
            break;
        case 'Down':
            igrok.style.left = left + unitMeas;
            igrok.style.top = exit.offsetTop + shag - shag * 0.2 + unitMeas;
            break;
        case 'Left':
            igrok.style.left = exit.offsetLeft - shag + unitMeas;
            // if(left%20){
            //     // console.log('1='+left)
            //     igrok.style.left = exit.offsetLeft-shag+unitMeas;
            // }else{
            //     igrok.style.left = exit.offsetLeft-shag-shag/2+unitMeas;
            //     // console.log('2='+left)
            // }
            igrok.style.top = top + unitMeas;
            break;
        case 'Right':
            // console.log(exit.offsetLeft)
            igrok.style.left = exit.offsetLeft + shag + unitMeas;
            igrok.style.top = top + unitMeas;
            break;
    }
    if(levelInput == 'LevIn-10'){
        setTimeout(dia,2000)
        // dia()
        console.log('Запускаем')
    }

    // tropa(width=2, 
    //     height=4, 
    //     top=0, 
    //     left=sizeXMax/shag/2)

}
function object(class_name = 'object',
    class_list = 'Arka',
    left = centreX - shag * 2,
    top = centreY - shag * 5,
    Level = level) {
        let ob = Level.querySelector(`.object`)
        // console.log(ob)
    let obClass = Level.querySelector(`.${class_name}`)
    if (!obClass) {
        obClass = document.createElement('div')
    }
    obClass.className = class_name
    let obList = document.createElement('div')
    obList.classList = class_list
    obList.style.left = left + 'px'
    obList.style.top = top + 'px'
    obClass.appendChild(obList)
    ob.appendChild(obClass)
}
function textura(class_name = 'tropa',
    class_list = 'stonePlatform',
    left = centreX + shag * 2,
    top = downEdge + shag - shag * 4,
    width = shag * 8,
    height = shag * 6,
    Level = level) {
    let classTexture = Level.querySelector(`.${class_name}`)
    let ob = document.createElement('div')
    ob.className = class_list
    ob.style.left = left + 'px'
    ob.style.top = top + 'px'
    ob.style.width = width + 'px'
    ob.style.height = height + 'px'
    classTexture.appendChild(ob)

}
