//-----------------------------Уровень №0 Стартовый--------------------------------------------
let pointHint = document.createElement('div')
pointHint.classList = 'hint'
pointHint.innerText = 'Нажми русскую букву «А».'
pointHint.hidden = true
document.body.appendChild(pointHint)
let LetterDialog = document.createElement('div')
LetterDialog.classList = 'LetterDialog'
LetterDialog.hidden = true
document.body.appendChild(LetterDialog)


function creatLevel(option = {
    name: 0,
    display: false,
    textures: {

    },
    objects: {

    },
    exit: {

    }
}, dialogExists = false,
    dialogs = [{
        // // exists: true,
        // display: false,
        // type: 'logStart',
        // text: 'Введите текст диалога',
        // top: downEdge - shag * 4,
        // left: rightEdge - shag * 4

    }]) {
    let level = document.createElement('div')
    level.className = `local-${option.name}`
    if (option.display) {
        level.style.display = 'none'
    }
    let way = document.createElement('div')
    way.className = 'way'
    let vegetation = document.createElement('div')
    vegetation.classList = 'vegetation'
    // let igrok_loc = document.createElement('div')
    // igrok_loc.className = 'igrok'
    let exit_loc = document.createElement('div')
    exit_loc.className = 'exit'
    let ob = document.createElement('div')
    ob.className = 'object'
    level.appendChild(vegetation)
    level.appendChild(exit_loc)
    level.appendChild(ob)
    level.appendChild(way)
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
            if (e.point.hint) {
                pointObject.classList.add('classHint')
            }
            let pointDialog = document.createElement('div')
            pointDialog.classList = 'Log'
            pointDialog.classList.add(e.point.type)
            pointDialog.id = `idLeter-${e.point.ID}`
            pointDialog.hidden = true
            pointDialog.style.left = 200 + "px"
            pointDialog.innerText = e.point.text
            pointHint.hidden = true
            pointObject.appendChild(pointDialog)
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

    if (dialogExists) {
        // console.log(dialogs)
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
}
//-----------------------------Уровень №0---------------------------------------------------------------
creatLevel(option = {
    name: 0, display: false,
    textures: [{
        class_name: 'way',
        class_list: 'tropa',
        left: centreX,
        top: upEdge - shag,
        width: shag * 2,
        height: downEdge + shag * 2,
    }, {
        class_name: 'way',
        class_list: 'ground',
        left: centreX - shag * 2,
        top: downEdge - shag,
        width: shag * 2,
        height: shag,
    }, {
        class_name: 'way',
        class_list: 'ground',
        left: centreX + shag * 2,
        top: downEdge - shag * 8,
        width: shag * 6,
        height: shag,
    }, {
        class_name: 'way',
        class_list: 'ground',
        left: centreX + shag * 2,
        top: downEdge - shag * 4,
        width: shag * 6,
        height: shag,
    }, {
        class_name: 'way',
        class_list: 'ground',
        left: centreX + shag * 8,
        top: downEdge - shag * 8,
        width: shag * 1,
        height: shag * 5,
    }, 
    {
        class_name: 'way',
        class_list: 'ground',
        left: centreX - shag * 5,
        top: downEdge - shag * 6,
        width: shag * 5,
        height: shag * 1,
    }, 
    {
        class_name: 'way',
        class_list: 'ground',
        left: centreX - shag * 5,
        top: downEdge - shag * 9,
        width: shag * 1,
        height: shag * 7,
    },
    {
        class_name: 'object',
        class_list: 'stonePlatform-2',
        left: centreX - shag * 7,
        top: downEdge - shag * 9,
        width: shag * 2,
        height: shag * 7,
    }
    ]
    ,
    objects: [
        // {
        //     class_name: 'obj',
        //     class_list: 'sculpure-3',
        //     left: centreX - shag * 0,
        //     top: centreY + shag * 3,
        // },
        // {
        //     class_name: 'All',
        //     class_list: 'key-3',
        //     left: centreX - shag * 0,
        //     top: centreY + shag * 4,
        // },
        {
            class_name: 'Tree',
            class_list: 'Tree-1',
            left: centreX + shag,
            top: downEdge - shag * 14,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 6,
            top: downEdge - shag * 5,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 2,
            top: downEdge - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 6,
            top: downEdge - shag * 5,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 5,
            top: downEdge - shag * 12,
        },
        {
            class_name: 'All',
            class_list: 'Grill',
            left: centreX - shag * 7,
            top: downEdge - shag * 8,
            point: {
                hint: true,
                ID: 0,
                type: 'logTask',
                text: `Если с объектом можно взаимодействовать, высветится подсказка. 
            Иногда объекты могут быть спрятаны, например, за деревьями. 
            Пройди по тропинке справа и попробуй отыскать следующие послание.`,
            }
        },
        {
            class_name: 'All',
            class_list: 'Point',
            left: centreX + shag * 4,
            top: downEdge - shag * 8,
            point: {
                hint: false,
                ID: 1,
                type: 'logTask',
                text: `Молодец! Всё что тебе требуется для дальнейших приключений тебе известно, 
                так, что как говорится, вперёд и навстречу… Хи-Хи. 
                Направляйся по каменной тропе вверх, в локацию «Большой дуб», 
                там я оставил тебе письмо с подробными инструкциями.`,
            }
        },
    ],
    exit: [
        {
            inLevel: 10,
            locationExit: 'Up',
            levelExit: 0,
            nameLevel: 'Большой дуб',
            width: 2,
            height: 1,
            top: upEdge / shag + 1,
            left: centreX / shag
        },
    ]
},
    dialogExists = true,
    dialogs = [
        {
            display: false,
            type: 'logStart',
            text: `Привет, давай пройдём небольшое обучение перед тем как отправиться на встречу приключениям.\n
    Нажми русскую букву «У» чтобы продолжить.`,
            top: downEdge - shag * 5,
            left: rightEdge - shag * 7
        },
        {
            display: true,
            type: 'logStart',
            text: `Что бы передвигаться воспользуйся своими любимыми стрелочками.\n
	↑
←	↓	→\n
Передвигайся только по тропинкам!
    Нажми русскую букву «У» чтобы продолжить.
`,
            top: downEdge - shag * 6,
            left: rightEdge - shag * 7
        },
        {
            display: true,
            type: 'logStart',
            text: `Для взаимодействия с предметами воспользуйся русской буквой «А»

    Нажми русскую букву «У» чтобы продолжить.

`,
            top: downEdge - shag * 5,
            left: rightEdge - shag * 7
        },
        {
            display: true,
            type: 'logStart',
            text: `Давай дойдем до камина и посмотрим, что можно сделать.

            Нажми русскую букву «У» чтобы продолжить.`,
            top: downEdge - shag * 5,
            left: rightEdge - shag * 7
        },
    ])
//-----------------------------Уровень №1---------------------------------------------------------------
creatLevel(option = {
    name: 1, display: true,
    textures: [
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX,
            top: centreY + shag * 3,
            width: shag * 2,
            height: downEdge,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: 0,
            top: centreY + shag * 3,
            width: sizeXMax + shag,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'ground',
            left: centreX + shag * 5,
            top: centreY - shag * 3,
            width: shag,
            height: shag * 6,
        },
        {
            class_name: 'way',
            class_list: 'ground',
            left: centreX - shag * 4,
            top: centreY - shag * 3,
            width: shag,
            height: shag * 6,
        },
        {
            class_name: 'way',
            class_list: 'ground',
            left: centreX - shag * 4,
            top: centreY - shag * 3,
            width: shag * 10,
            height: shag,
        },
        {
            class_name: 'way',
            class_list: 'ground',
            left: centreX,
            top: centreY + shag * 2,
            width: shag * 2,
            height: shag,
        },

    ]
    ,
    objects: [
        {
            class_name: 'Tree',
            class_list: 'Tree-0',
            left: centreX - shag * 5,
            top: centreY - shag * 10,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 6,
            top: downEdge - shag * 5,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 4,
            top: downEdge - shag * 3,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 9,
            top: downEdge - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 6,
            top: downEdge - shag * 5,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 4,
            top: downEdge - shag * 3,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 9,
            top: downEdge - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 8,
            top: centreY - shag * 7,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 11,
            top: centreY - shag * 7,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 9,
            top: centreY - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 8,
            top: centreY - shag * 7,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 11,
            top: centreY - shag * 7,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 9,
            top: centreY - shag * 4,
        },
        {
            class_name: 'All',
            class_list: 'letter',
            left: centreX,
            top: centreY + shag,
            point: {
                hint: false,
                ID: 2,
                type: 'logTask',
                text: `Привет любимая.
                Я приготовил для тебя подарок, 
                правда его придётся немного поискать…
                Надеюсь ты не заплутаешь и быстро его от ищешь.
                Ну, и для начала, тебе стоит сходить к беседке.
                Для этого поверни на право и пройди по тропе…`,
            }
        },
        {
            class_name: 'All',
            class_list: 'Point',
            left: centreX,
            top: centreY - shag * 3,
            point: {
                hint: false,
                ID: 6,
                type: 'logTask',
                text: `Эээх!!!... большой ветвистый дуб.
                Надеюсь ты осматриваешься и запоминаешь пройденные места?
                Нет?! Ну в таком случае тебе придётся по бродить по просторам моих вымышленных улиц.
                А когда наконец наткнёшься на «Большой Дом», посчитай деревья, по правилу слева на право и сверху вниз.
                Когда насчитаешь число равное номеру нашей квартиры…
                И дата, соответствующая вроде…
                В общем внимательнее приглядись к этому дереву.`,
            }
        },
    ],
    exit: [
        {
            inLevel: 2,
            locationExit: 'Left',
            levelExit: 1,
            nameLevel: 'Тропа',
            width: 1,
            height: 2,
            top: centreY / shag + 3,
            left: leftEdge / shag + 1
        },
        {
            inLevel: 3,
            locationExit: 'Right',
            levelExit: 1,
            nameLevel: 'Тропа',
            width: 1,
            height: 2,
            top: centreY / shag + 3,
            left: rightEdge / shag
        },
        {
            inLevel: 0,
            locationExit: 'Down',
            levelExit: 1,
            nameLevel: 'Мангальная',
            width: 2,
            height: 1,
            top: downEdge / shag,
            left: centreX / shag
        },
    ]
},
    // dialogExists = true,
    //     dialogs = [
    //         {
    //             display: false,
    //             type: 'logStart',
    //             text: `Привет, давай пройдём небольшое обучение перед тем как отправиться на встречу приключениям.\n
    //         Нажми русскую букву «У» чтобы продолжить.`,
    //             top: downEdge - shag * 4,
    //             left: rightEdge - shag * 4
    //         },
    //         {
    //             display: true,
    //             type: 'logStart',
    //             text: `Что бы передвигаться воспользуйся своими любимыми стрелочками.\n
    //         ↑
    //     ←	↓	→\n
    //     Передвигайся только по тропинкам!
    //         Нажми русскую букву «У» чтобы продолжить.
    //     `,
    //             top: downEdge - shag * 4,
    //             left: rightEdge - shag * 4
    //         },
    //         {
    //             display: true,
    //             type: 'logStart',
    //             text: `Для взаимодействия с предметами воспользуйся русской буквой «А»

    //         Нажми русскую букву «У» чтобы продолжить.

    //     `,
    //             top: downEdge - shag * 4,
    //             left: rightEdge - shag * 4
    //         },
    //         {
    //             display: true,
    //             type: 'logStart',
    //             text: `Давай дойдем до камина и посмотрим, что можно сделать.

    //                 Нажми русскую букву «У» чтобы продолжить.`,
    //             top: downEdge - shag * 4,
    //             left: rightEdge - shag * 4
    //         },
    //         // {
    //         //     display: true,
    //         //     itObjecct: 'Grill',
    //         //     type: 'logTask',
    //         //     text: `Если с объектом можно взаимодействовать, высветится подсказка. 
    //         //     Иногда объекты могут быть спрятаны, например, за деревьями. 
    //         //     Пройди по тропинке справа и попробуй отыскать следующие послание.

    //         //     Нажми русскую букву «У» чтобы продолжить.`,
    //         //     top: downEdge - shag * 4,
    //         //     left: rightEdge - shag * 4
    //         // },
    // ]
)
//-----------------------------Уровень №2---------------------------------------------------------------
creatLevel(option = {
    name: 2, display: true,
    textures: [
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 3,
            top: upEdge - shag,
            width: shag * 2,
            height: centreY + shag * 4,
        },
        {
            class_name: 'way',
            class_list: 'ground',
            left: centreX + shag,
            top: centreY - shag * 4,
            width: shag * 2,
            height: shag * 9,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 3,
            top: centreY + shag * 3,
            width: centreX,
            height: shag * 2,
        },
    ]
    ,

    objects: [
        {
            class_name: 'Tree',
            class_list: 'Tree-all',
            left: centreX - shag*15,
            top: centreY - shag*15,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-all',
            left: centreX - shag*15,
            top: centreY - shag*2,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-all',
            left: centreX + shag*10,
            top: centreY - shag*13,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-all',
            left: centreX + shag*8,
            top: centreY + shag*2,
        },
       
        {
            class_name: 'obj',
            class_list: 'bench',
            left: centreX ,
            top: centreY - shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'bench',
            left: centreX ,
            top: centreY + shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'urn',
            left: centreX + shag,
            top: centreY-shag,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX + shag * 5,
            top: centreY - shag,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX + shag * 5,
            top: centreY - shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX + shag * 8,
            top: centreY + shag,
        },
    ],
    exit: [
        {
            inLevel: 1,
            locationExit: 'Right',
            levelExit: 2,
            nameLevel: 'Большой дуб',
            width: 1,
            height: 2,
            top: centreY / shag + 3,
            left: rightEdge / shag
        },
        {
            inLevel: 4,
            locationExit: 'Up',
            levelExit: 2,
            nameLevel: 'Сарай',
            width: 2,
            height: 1,
            top: upEdge / shag + 1,
            left: centreX / shag + 3
        },
    ],

}
)
//-----------------------------Уровень №3---------------------------------------------------------------
creatLevel(option = {
    name: 3, display: true,
    textures: [
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 3,
            top: upEdge - shag,
            width: shag * 2,
            height: centreY + shag * 4,
        },
        {
            class_name: 'way',
            class_list: 'ground',
            left: centreX - shag,
            top: centreY - shag*4,
            width: shag * 2,
            height: shag * 9,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: 0,
            top: centreY + shag * 3,
            width: centreX - shag,
            height: shag * 2,
        },
    ],
    objects: [
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 6,
            top: downEdge - shag * 5,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 4,
            top: downEdge - shag * 3,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 9,
            top: downEdge - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 6,
            top: downEdge - shag * 5,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 4,
            top: downEdge - shag * 3,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 9,
            top: downEdge - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 8,
            top: centreY - shag * 7,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 11,
            top: centreY - shag * 7,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 9,
            top: centreY - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 8,
            top: centreY - shag * 7,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 11,
            top: centreY - shag * 7,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 9,
            top: centreY - shag * 4,
        },
        {
            class_name: 'obj',
            class_list: 'bench-2',
            left: centreX - shag,
            top: centreY - shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'bench-2',
            left: centreX - shag,
            top: centreY + shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'urn',
            left: centreX,
            top: centreY-shag,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX - shag * 4,
            top: centreY - shag,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX - shag * 4,
            top: centreY - shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX - shag * 7,
            top: centreY + shag,
        },
    ],
    exit: [
        {
            inLevel: 1,
            locationExit: 'Left',
            levelExit: 3,
            nameLevel: 'Большой дуб',
            width: 1,
            height: 2,
            top: centreY / shag + 3,
            left: leftEdge / shag
        },
        {
            inLevel: 6,
            locationExit: 'Up',
            levelExit: 3,
            nameLevel: 'Беседка',
            width: 2,
            height: 1,
            top: upEdge / shag + 1,
            left: centreX / shag - 3
        },
    ],

}
)
//-----------------------------Уровень №4---------------------------------------------------------------
creatLevel(option = {
    name: 4, display: true,
    textures: [
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 3,
            top: centreY - shag * 5,
            width: shag * 2,
            height: downEdge,
        },
        {
            class_name: 'way',
            class_list: 'ground',
            left: centreX - shag * 6,
            top: centreY,
            width: shag * 9,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 3,
            top: centreY - shag * 5,
            width: centreX + shag,
            height: shag * 2,
        },
    ],
    objects: [

        {
            class_name: 'Tree',
            class_list: 'Tree-all',
            left: centreX - shag * 15,
            top: centreY-shag*14,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-all',
            left: centreX - shag * 15,
            top: centreY-shag*1,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 4,
            top: downEdge - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 2,
            top: downEdge - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 9,
            top: downEdge - shag * 4,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 4,
            top: centreY - shag * 5,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX - shag * 1,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 9,
            top: centreY - shag * 5,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 7,
            top: centreY - shag * 2,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-2',
            left: centreX + shag * 6,
            top: downEdge - shag * 7,
        },
        {
            class_name: 'All',
            class_list: 'flashlight-2',
            left: centreX + shag * 2,
            top: centreY - shag * 2,
            point: {
                hint: false,
                ID: 5,
                type: 'logTask',
                text: `Здорово!!! Ты нашла подсказку.
                Надеюсь тебе нравится данное приключение.
                Кстати, если тебе захочется прочитать подсказку ещё раз, просто подойди к той подсказке, которую хочешь прочитать и нажми букву «А» ещё раз.
                И так, перейдём к подсказке…
                В нашей реальности мы долго думали из чего сделать подоконник в гостиной
                А может всё еще и думаем…
                Ну так вот, из какого дерева было бы здорово сделать хороший и прочный подоконник?
                Следующая подсказка спрятана за этим деревом.
                И что бы не делать большой круг, ты можешь дойти до него от сюда, просто иди вниз по тропе.`,
            }
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX + shag * 2,
            top: centreY + shag,
        },
        {
            class_name: 'obj',
            class_list: 'barn',
            left: centreX - shag * 7,
            top: centreY - shag * 5,
        },
    ],
    exit: [
        {
            inLevel: 5,
            locationExit: 'Right',
            levelExit: 4,
            nameLevel: 'Большой дом',
            width: 1,
            height: 2,
            top: centreY / shag - 5,
            left: rightEdge / shag - 1
        },
        {
            inLevel: 2,
            locationExit: 'Down',
            levelExit: 4,
            nameLevel: 'Тропа',
            width: 2,
            height: 1,
            top: downEdge / shag,
            left: centreX / shag + 3
        },
    ],

}
)
//-----------------------------Уровень №5---------------------------------------------------------------
creatLevel(option = {
    name: 5, display: true,
    textures: [
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX,
            top: 0,
            width: shag * 2,
            height: centreY + shag,
        },
        {
            class_name: 'object',
            class_list: 'ground',
            left: 0,
            top: centreY - shag * 6,
            width: rightEdge + shag * 4,
            height: shag * 4,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: 0,
            top: centreY - shag * 5,
            width: rightEdge + shag * 4,
            height: shag * 2,
        },
    ],
    objects: [

        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 12,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 12,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 10,
            top: centreY - shag * 6,
        },
        {
            class_name: 'All',
            class_list: 'Point',
            left: centreX - shag * 10,
            top: centreY - shag * 3,
            point: {
                hint: false,
                ID: 7,
                type: 'logTask',
                text: `Освоилась? Если да, то это хорошо, так как я тебя больше направлять не буду.
                Хи-Хи
                Скажи, а куда обычно бросают монетку на удачу?
                Думаю, следующая подсказка ждёт тебя там.`,
            }
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 10,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 8,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 8,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 6,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 6,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 4,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 4,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 2,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX - shag * 2,
            top: centreY - shag * 9,
        },

        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 12,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 12,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 10,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 10,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 8,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 8,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 6,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 6,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 4,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 4,
            top: centreY - shag * 9,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 2,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-3',
            left: centreX + shag * 2,
            top: centreY - shag * 9,
        },

        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX + shag * 2,
            top: centreY - shag,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX - shag,
            top: centreY - shag,
        },
        {
            class_name: 'obj',
            class_list: 'home',
            left: centreX - shag * 8,
            top: centreY + shag,
        },
    ],
    exit: [
        {
            inLevel: 6,
            locationExit: 'Right',
            levelExit: 5,
            nameLevel: 'Беседка',
            width: 1,
            height: 2,
            top: centreY / shag - 5,
            left: rightEdge / shag
        },
        {
            inLevel: 4,
            locationExit: 'Left',
            levelExit: 5,
            nameLevel: 'Сарай',
            width: 1,
            height: 2,
            top: centreY / shag - 5,
            left: leftEdge / shag + 1
        },
        {
            inLevel: 8,
            locationExit: 'Up',
            levelExit: 5,
            nameLevel: 'Улица с фонтаном',
            width: 2,
            height: 1,
            top: upEdge / shag,
            left: centreX / shag
        },
    ],
}
)
//-----------------------------Уровень №6---------------------------------------------------------------
creatLevel(option = {
    name: 6, display: true,
    textures: [
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 3,
            top: centreY - shag * 5,
            width: shag * 2,
            height: downEdge,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform',
            left: centreX - shag * 2,
            top: centreY - shag,
            width: shag * 6,
            height: shag * 2,
        },
        {
            class_name: 'object',
            class_list: 'ground',
            left: centreX - shag * 2,
            top: centreY - shag * 2,
            width: shag * 6,
            height: shag * 4,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform',
            left: centreX + shag * 3,
            top: centreY - shag * 5,
            width: shag * 10,
            height: shag * 10,
        },
        {
            class_name: 'way',
            class_list: 'ground',
            left: centreX + shag * 2,
            top: centreY - shag * 6,
            width: shag * 12,
            height: shag * 12,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: 0,
            top: centreY - shag * 5,
            width: centreX - shag * 3,
            height: shag * 2,
        },
    ],
    objects: [

        {
            class_name: 'Tree',
            class_list: 'Tree-all',
            left: centreX - shag * 18,
            top: centreY - shag * 6,
        },
        {
            class_name: 'Tree',
            class_list: 'Tree-all',
            left: centreX + shag * 16,
            top: centreY - shag * 7,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX + shag * 2,
            top: centreY,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight-2',
            left: centreX + shag * 2,
            top: centreY - shag * 3,
        },
        {
            class_name: 'All',
            class_list: 'pot',
            left: centreX + shag * 2,
            top: centreY + shag * 3,
            point: {
                hint: false,
                ID: 4,
                type: 'logTask',
                text: `Для начала найди «Сарай».
                Можешь повернуть налево и идти по прямой пока не увидишь здание «Сарая».
                Под одним из столбов освещения, расположенных возле здания ты и найдёшь следующую подсказку.`,
            }
        },
        {
            class_name: 'obj',
            class_list: 'pot-2',
            left: centreX + shag * 6,
            top: centreY - shag * 6,
        },
        {
            class_name: 'obj',
            class_list: 'pot',
            left: centreX + shag * 9,
            top: centreY - shag * 6,
        },
        {
            class_name: 'obj',
            class_list: 'pot-3',
            left: centreX + shag * 13,
            top: centreY - shag * 4,
        },
        {
            class_name: 'obj',
            class_list: 'pot-2',
            left: centreX + shag * 2,
            top: centreY - shag * 4,
        },
        {
            class_name: 'obj',
            class_list: 'pot',
            left: centreX + shag * 6,
            top: centreY + shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'pot-3',
            left: centreX + shag * 9,
            top: centreY + shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'pot-2',
            left: centreX + shag * 13,
            top: centreY + shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'pavilion',
            left: centreX + shag * 3 + shag/2,
            top: centreY - shag * 6,
        },
        {
            class_name: 'All',
            class_list: 'letter',
            left: centreX + shag * 5,
            top: centreY ,
            point: {
                hint: false,
                ID: 3,
                type: 'logTask',
                text: `Ты уже здесь!!!
                Какая же ты быстрая…
                Но… подарок не тут, насладись видом,
                А я расскажу, как отыскать твой подарок.
                Я спрятал множество подсказок в различных местах, 
                И каждая найденная подсказка приблизит тебя к желаемому.
                Правда подсказки не совсем обычные, 
                И они появляются постепенно.
                Первая к примеру, находится под одним из горшков.
                Когда отыщешь нужный горшок, появится подсказка.
                А пока желаю тебе успешных поисков и… 
                И целую тебя в губы.`,
            }
        },
    ],
    exit: [
        {
            inLevel: 5,
            locationExit: 'Left',
            levelExit: 6,
            nameLevel: 'Большой дом',
            width: 1,
            height: 2,
            top: centreY / shag - 5,
            left: leftEdge / shag + 1
        },
        {
            inLevel: 3,
            locationExit: 'Down',
            levelExit: 6,
            nameLevel: 'Тропа',
            width: 2,
            height: 1,
            top: downEdge / shag - 1,
            left: centreX / shag - 3
        },
    ],
}
)
//-----------------------------Уровень №7---------------------------------------------------------------
creatLevel(option = {
    name: 7, display: true,
    textures: [

        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX,
            top: 0,
            width: shag * 2,
            height: centreY + shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform-2',
            left: centreX,
            top: centreY + shag * 2,
            width: shag,
            height: shag * 6,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform-2',
            left: centreX + shag * 5,
            top: centreY - shag * 3,
            width: shag,
            height: shag * 4,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform-2',
            left: centreX + shag * 13,
            top: centreY - shag * 3,
            width: shag,
            height: shag * 4,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform-2',
            left: centreX - shag * 7,
            top: centreY + shag * 5,
            width: shag * 8,
            height: shag,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform-2',
            left: centreX - shag * 7,
            top: centreY - shag * 5,
            width: shag * 8,
            height: shag,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform-2',
            left: centreX + shag * 5,
            top: centreY - shag * 3,
            width: shag * 8,
            height: shag,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform-2',
            left: centreX - shag * 7,
            top: centreY - shag * 5,
            width: shag * 2,
            height: shag * 10,
        },
        {
            class_name: 'way',
            class_list: 'ground-2',
            left: centreX - shag * 9,
            top: centreY - shag * 5,
            width: shag * 7,
            height: shag * 13,
        },
        {
            class_name: 'way',
            class_list: 'ground-2',
            left: centreX - shag * 2,
            top: centreY + shag * 2,
            width: shag * 5,
            height: shag * 6,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX,
            top: centreY,
            width: rightEdge + shag * 2,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag * 2,
            top: centreY - shag * 2,
            width: shag * 3,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag * 6,
            top: centreY - shag * 2,
            width: shag * 7,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag * 14,
            top: centreY - shag * 2,
            width: rightEdge,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag * 3,
            top: centreY + shag * 1,
            width: rightEdge,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag * 2,
            top: 0,
            width: shag * 2,
            height: centreY - shag * 0,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag * 2,
            top: 0,
            width: shag * 2,
            height: centreY - shag * 5,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag * 2,
            top: centreY - shag * 4,
            width: shag * 2,
            height: shag * 6,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag * 11,
            top: centreY - shag * 7,
            width: shag * 2,
            height: shag * 17,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag * 3,
            top: centreY + shag * 3,
            width: shag * 2,
            height: shag * 5,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag * 9,
            top: centreY - shag * 7,
            width: shag * 7,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag * 9,
            top: centreY + shag * 8,
            width: shag * 14,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'Tree-all-2',
            left: centreX - shag ,
            top: centreY + shag,
            width: rightEdge,
            height: downEdge,
        },
        {
            class_name: 'vegetation',
            class_list: 'Tree-all',
            left: centreX - shag*25,
            top: centreY-shag*13,
            width: 700,
            height: 800,
        },
        {
            class_name: 'vegetation',
            class_list: 'Tree-all',
            left: centreX - shag*25,
            top: centreY-shag*2,
            width: 700,
            height: 800,
        },
        {
            class_name: 'vegetation',
            class_list: 'Tree-all',
            left: centreX + shag * 5,
            top: centreY-shag*19,
            width: 700,
            height: 800,
        },
    ],
    objects: [
        {
            class_name: 'All',
            class_list: 'letter',
            left: centreX-shag*2,
            top: centreY + shag * 3,
            point: {
                hint: false,
                ID: 9,
                type: 'logTask',
                text: `Теперь посидим и подумаем…
                В окрестностях сквера есть три скульптуры.
                У каждой скульптуры есть кнопка, если подойти к скульптуре по ближе, думаю ты сможешь её найти и нажать.
                Эти кнопки в свою очередь открывают двери в «Зелёном лабиринте»
                Это тропинка, ведущая от фонтана на право,
                И если ты туда заходила, то должна была заметить цветные замочки.
                Ну так вот, тебе только и нужно войти в правильную дверь
                Ты поймёшь, когда войдёшь.
                И учти, за раз ты можешь открыть лишь одну дверь!
                Вперёд навстречу приключениям!!!`,
            }
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX - shag * 8,
            top: centreY,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX - shag * 7,
            top: centreY + shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX - shag * 3,
            top: centreY + shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX - shag * 3,
            top: centreY - shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX + shag * 5,
            top: centreY - shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX + shag * 13,
            top: centreY - shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'sculpure',
            left: centreX - shag * 5,
            top: centreY + shag * 3,
        },
        {
            class_name: 'All',
            class_list: 'key-1',
            left: centreX - shag * 5,
            top: centreY + shag * 4,
            point: {
                hint: true,
                // ID: 10,
                // type: 'logTask',
                // text: ``,
            }
        },
        {
            class_name: 'obj',
            class_list: 'sculpure-2',
            left: centreX - shag * 9,
            top: centreY + shag * 5,
        },
        {
            class_name: 'All',
            class_list: 'key-2',
            left: centreX - shag * 9,
            top: centreY + shag * 6,
            point: {
                hint: true,
                // ID: 10,
                // type: 'logTask',
                // text: ``,
            }
        },
        {
            class_name: 'obj',
            class_list: 'sculpure-3',
            left: centreX - shag * 5,
            top: centreY - shag * 3,
        },
        {
            class_name: 'All',
            class_list: 'key-3',
            left: centreX - shag * 5,
            top: centreY - shag * 2,
            point: {
                hint: true,
                // ID: 10,
                // type: 'logTask',
                // text: ``,
            }
        },
        {
            class_name: 'obj',
            class_list: 'bench',
            left: centreX - shag * 3,
            top: centreY + shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'bench',
            left: centreX - shag * 10,
            top: centreY + shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'bench',
            left: centreX - shag * 10,
            top: centreY - shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'bench-2',
            left: centreX - shag * 5,
            top: centreY - shag * 0,
        },
        {
            class_name: 'obj',
            class_list: 'bench-2',
            left: centreX + shag * 1,
            top: centreY + shag * 3,
        },

        {
            class_name: 'obj',
            class_list: 'bench-3',
            left: centreX - shag*3,
            top: centreY + shag * 7,
        },
        {
            class_name: 'obj',
            class_list: 'bench-4',
            left: centreX + shag * 6,
            top: centreY - shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'bench-4',
            left: centreX + shag * 10,
            top: centreY - shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'urn',
            left: centreX + shag,
            top: centreY + shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'urn',
            left: centreX - shag * 9,
            top: centreY-shag,
        },
        {
            class_name: 'obj',
            class_list: 'urn',
            left: centreX + shag * 9,
            top: centreY - shag * 5
        },
        // {
        //     class_name: 'All',
        //     class_list: 'Point',
        //     left: centreX,
        //     top: centreY + shag * 3,
        //     point: {
        //         hint: false,
        //         ID: 8,
        //         type: 'logTask',
        //         text: `Для начала найди «Сарай».
        //         Можешь повернуть налево и идти по прямой пока не увидишь здание «Сарая».
        //         Под одним из столбов освещения, расположенных возле здания ты и найдёшь следующую подсказку.
        //         `,
        //     }
        // },
    ],
    exit: [
        {
            inLevel: 8,
            locationExit: 'Right',
            levelExit: 7,
            nameLevel: 'Улица с фонтаном',
            width: 1,
            height: 2,
            top: centreY / shag,
            left: rightEdge / shag
        },
        {
            inLevel: 7,
            locationExit: 'Up',
            levelExit: 7,
            nameLevel: '',
            width: 2,
            height: 1,
            top: upEdge / shag - 1,
            left: centreX / shag
        },
    ],
}
)
//-----------------------------Уровень №8---------------------------------------------------------------
creatLevel(option = {
    name: 8, display: true,
    textures: [
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX,
            top: centreY + shag * 4,
            width: shag * 2,
            height: centreY,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX,
            top: 0,
            width: shag * 2,
            height: centreY - shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: 0,
            top: centreY,
            width: centreX - shag * 2,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 4,
            top: centreY - shag * 4,
            width: shag * 2,
            height: shag * 10,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 4,
            top: centreY - shag * 4,
            width: shag * 2,
            height: shag * 10,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 4,
            top: centreY,
            width: centreX,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 4,
            top: centreY + shag * 4,
            width: shag * 10,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 4,
            top: centreY - shag * 4,
            width: shag * 10,
            height: shag * 2,
        },
        {
            class_name: 'object',
            class_list: 'stonePlatform',
            left: centreX - shag * 7,
            top: centreY - shag * 7,
            width: shag * 16,
            height: shag * 16,
        },
        {
            class_name: 'object',
            class_list: 'side',
            left: centreX - shag * 2,
            top: centreY - shag * 2,
            width: shag * 6,
            height: shag * 6,
        },
        {
            class_name: 'object',
            class_list: 'water',
            left: centreX - shag * 1,
            top: centreY - shag * 1,
            width: shag * 4,
            height: shag * 4,
        },
    ],
    objects: [
        {
            class_name: 'obj',
            class_list: 'fantan',
            left: centreX - shag * 2,
            top: centreY - shag * 4,
        },
        {
            class_name: 'obj',
            class_list: 'bench',
            left: centreX - shag * 7,
            top: centreY - shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'bench',
            left: centreX - shag * 7,
            top: centreY + shag * 4,
        },
        {
            class_name: 'obj',
            class_list: 'bench-2',
            left: centreX + shag * 6,
            top: centreY - shag * 3,
        },
        {
            class_name: 'obj',
            class_list: 'bench-2',
            left: centreX + shag * 6,
            top: centreY + shag * 4,
        },
        {
            class_name: 'obj',
            class_list: 'bench-3',
            left: centreX + shag * 3,
            top: centreY + shag * 7,
        },
        {
            class_name: 'obj',
            class_list: 'bench-3',
            left: centreX - shag * 4,
            top: centreY + shag * 7,
        },
        {
            class_name: 'obj',
            class_list: 'bench-4',
            left: centreX + shag * 3,
            top: centreY - shag * 6,
        },
        {
            class_name: 'obj',
            class_list: 'bench-4',
            left: centreX - shag * 4,
            top: centreY - shag * 6,
        },
        {
            class_name: 'obj',
            class_list: 'urn',
            left: centreX - shag * 5,
            top: centreY - shag * 6,
        },
        {
            class_name: 'obj',
            class_list: 'urn',
            left: centreX + shag * 6,
            top: centreY - shag * 6,
        },
        {
            class_name: 'obj',
            class_list: 'urn',
            left: centreX - shag * 5,
            top: centreY + shag * 6,
        },
        {
            class_name: 'obj',
            class_list: 'urn',
            left: centreX + shag * 6,
            top: centreY + shag * 6,
        },
        {
            class_name: 'All',
            class_list: 'Point',
            left: centreX,
            top: centreY + shag * 3,
            point: {
                hint: false,
                ID: 8,
                type: 'logTask',
                text: `Не промокла?
                Да не промокла, я-то знаю…
                Если только от нетерпения заполучить свой долгожданный подарок.
                Хи-Хи
                И так, думаю дальше нужно просто и непринуждённо прогуляться.
                Подсказка: иногда там гуляют парочки, сидят и целуются на лавочках.`,
            }
        },
    ],
    exit: [
        {
            inLevel: 7,
            locationExit: 'Left',
            levelExit: 8,
            nameLevel: 'Сквер',
            width: 1,
            height: 2,
            top: centreY / shag,
            left: leftEdge / shag + 1
        },
        {
            inLevel: 9,
            locationExit: 'Right',
            levelExit: 8,
            nameLevel: 'Зелёный лабиринт',
            width: 1,
            height: 2,
            top: centreY / shag,
            left: rightEdge / shag + 1
        },
        {
            inLevel: 5,
            locationExit: 'Down',
            levelExit: 8,
            nameLevel: 'Большой дом',
            width: 2,
            height: 1,
            top: downEdge / shag + 1,
            left: centreX / shag
        },
        // {
        //     inLevel: 11,
        //     locationExit: 'Up',
        //     levelExit: 8,
        //     nameLevel: 'Главный выход',
        //     width: 2,
        //     height: 1,
        //     top: upEdge / shag,
        //     left: centreX / shag
        // },
    ],
}
)
//-----------------------------Уровень №9---------------------------------------------------------------
creatLevel(option = {
    name: 9, display: true,
    textures: [
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX,
            top: centreY + shag * 8,
            width: shag * 1,
            height: centreY,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX,
            top: 0,
            width: shag * 1,
            height: centreY - shag * 6,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: 0,
            top: centreY,
            width: centreX - shag * 15,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 15,
            top: centreY,
            width: centreX,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag*15,
            top: centreY - shag*5,
            width: shag * 1,
            height: shag * 9,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*16,
            top: centreY - shag*7,
            width: shag * 1,
            height: shag * 7,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*14,
            top: centreY - shag*4,
            width: shag * 1,
            height: shag * 7,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*13,
            top: centreY - shag*4,
            width: shag * 1,
            height: shag * 7,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*12,
            top: centreY - shag*4,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*11,
            top: centreY - shag*5,
            width: shag * 2,
            height: shag * 3,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*11,
            top: centreY - shag*1,
            width: shag * 2,
            height: shag * 7,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*16,
            top: centreY + shag*1,
            width: shag * 1,
            height: shag * 8,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 15,
            top: centreY- shag * 5,
            width: shag * 4,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*14,
            top: centreY - shag*4 - shag*0.5,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*15,
            top: centreY + shag*4 - shag*0.5,
            width: shag * 4,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*11,
            top: centreY - shag*5 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*11,
            top: centreY - shag*1 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*15,
            top: centreY + shag*8 - shag*0.5,
            width: shag * 15,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*15,
            top: centreY + shag*8,
            width: shag * 15,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*15,
            top: centreY - shag*7,
            width: shag * 3,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*14,
            top: centreY + shag*4,
            width: shag * 3,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*15,
            top: centreY + shag*4,
            width: shag * 1,
            height: shag * 4,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*13,
            top: centreY - shag*7,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*12,
            top: centreY - shag*7,
            width: shag * 12,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*1,
            top: centreY - shag*7,
            width: shag * 15,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*15,
            top: centreY - shag*6,
            width: shag * 1,
            height: shag * 6,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*15,
            top: centreY + shag*1,
            width: shag * 1,
            height: shag * 7,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*1,
            top: centreY + shag*8,
            width: shag * 15,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*1,
            top: centreY + shag*8 - shag*0.5,
            width: shag * 15,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*13,
            top: centreY + shag*7,
            width: shag * 5,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*13,
            top: centreY + shag*7 - shag*0.5,
            width: shag * 5,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*8,
            top: centreY - shag*7,
            width: shag * 2,
            height: shag * 4,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*8,
            top: centreY - shag*2,
            width: shag * 2,
            height: shag * 5,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*8,
            top: centreY - shag*2,
            width: shag * 5,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*5,
            top: centreY - shag*4,
            width: shag * 2,
            height: shag * 4,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*5,
            top: centreY - shag*4 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*5,
            top: centreY + shag*1,
            width: shag * 2,
            height: shag * 6,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*5,
            top: centreY + shag*1 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*8,
            top: centreY - shag*2 - shag*0.5,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*8,
            top: centreY + shag*4,
            width: shag * 2,
            height: shag * 4,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*8,
            top: centreY + shag*4 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*6,
            top: centreY - shag*7,
            width: shag * 4,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*2,
            top: centreY - shag*7,
            width: shag * 2,
            height: shag * 9,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*3,
            top: centreY + shag*3,
            width: shag * 4,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*3,
            top: centreY + shag*3 - shag*0.5,
            width: shag * 4,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*2,
            top: centreY + shag*6,
            width: shag * 2,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*0,
            top: centreY - shag*5,
            width: shag * 2,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*0,
            top: centreY - shag*5 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX - shag*0,
            top: centreY - shag*2,
            width: shag * 3,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*0,
            top: centreY - shag*2 - shag*0.5,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*1,
            top: centreY + shag*1,
            width: shag * 2,
            height: shag * 7,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*1,
            top: centreY + shag*1 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*3,
            top: centreY - shag*7,
            width: shag * 2,
            height: shag * 4,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*4,
            top: centreY - shag*2,
            width: shag * 2,
            height: shag * 6,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*4,
            top: centreY - shag*2 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*6,
            top: centreY - shag*2,
            width: shag * 2,
            height: shag * 4,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*6,
            top: centreY - shag*2 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*8,
            top: centreY - shag*1,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*8,
            top: centreY - shag*1 - shag*0.5,
            width: shag * 1,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*9,
            top: centreY - shag*0,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*9,
            top: centreY - shag*0 - shag*0.5,
            width: shag * 1,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*10,
            top: centreY + shag*1,
            width: shag * 1,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*10,
            top: centreY + shag*1  - shag*0.5,
            width: shag * 1,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*6,
            top: centreY - shag*5,
            width: shag * 3,
            height: shag * 2,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*6,
            top: centreY - shag*5 - shag*0.5,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*9,
            top: centreY - shag*5,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*9,
            top: centreY - shag*5 - shag*0.5,
            width: shag * 1,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*10,
            top: centreY - shag*4,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*10,
            top: centreY - shag*4 - shag*0.5,
            width: shag * 1,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*11,
            top: centreY - shag*3,
            width: shag * 2,
            height: shag * 3,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*11,
            top: centreY - shag*3 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*12,
            top: centreY - shag*1,
            width: shag * 2,
            height: shag * 3,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes-2',
            left: centreX + shag*4,
            top: centreY - shag*7,
            width: shag * 12,
            height: shag * 15,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*13,
            top: centreY - shag*1 - shag*0.5,
            width: shag * 1,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX - shag*2,
            top: centreY + shag*6 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*4,
            top: centreY + shag*5 - shag*0.5,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*7,
            top: centreY + shag*3 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*10,
            top: centreY + shag*3 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*13,
            top: centreY + shag*3 - shag*0.5,
            width: shag * 2,
            height: shag * 1,
        },
        {
            class_name: 'vegetation',
            class_list: 'bushes',
            left: centreX + shag*12,
            top: centreY + shag*7 - shag*0.5,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 12,
            top: centreY- shag * 6,
            width: shag * 4,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 12,
            top: centreY- shag * 2,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 14,
            top: centreY+ shag * 3,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 14,
            top: centreY+ shag * 6,
            width: shag * 5,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 9,
            top: centreY- shag * 6,
            width: shag * 1,
            height: shag * 13,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 12,
            top: centreY- shag * 1,
            width: shag * 1,
            height: shag * 5,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 14,
            top: centreY+ shag * 6,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 8,
            top: centreY- shag * 3,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 8,
            top: centreY+ shag * 3,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 6,
            top: centreY- shag * 5,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 6,
            top: centreY+ shag * 0,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 6,
            top: centreY+ shag * 7,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 3,
            top: centreY+ shag * 2,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 3,
            top: centreY+ shag * 5,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 6,
            top: centreY- shag * 5,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 6,
            top: centreY- shag * 0,
            width: shag * 1,
            height: shag * 8,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 3,
            top: centreY- shag * 5,
            width: shag * 1,
            height: shag * 8,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 3,
            top: centreY+ shag * 5,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 0,
            top: centreY+ shag * 0,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 0,
            top: centreY+ shag * 5,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 0,
            top: centreY- shag * 6,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 0,
            top: centreY- shag * 3,
            width: shag * 9,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX - shag * 0,
            top: centreY- shag * 0,
            width: shag * 4,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 2,
            top: centreY- shag * 6,
            width: shag * 1,
            height: shag * 4,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 3,
            top: centreY- shag * 3,
            width: shag * 1,
            height: shag * 10,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 3,
            top: centreY + shag * 4,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 3,
            top: centreY + shag * 7,
            width: shag * 7,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 5,
            top: centreY - shag * 6,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 6,
            top: centreY + shag * 2,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 8,
            top: centreY - shag * 3,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 9,
            top: centreY - shag * 2,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 9,
            top: centreY + shag * 2,
            width: shag * 1,
            height: shag * 6,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 10,
            top: centreY - shag * 6,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 10,
            top: centreY - shag * 1,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 11,
            top: centreY - shag * 5,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 11,
            top: centreY - shag * 0,
            width: shag * 1,
            height: shag * 2,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 13,
            top: centreY - shag * 4,
            width: shag * 1,
            height: shag * 3,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 14,
            top: centreY - shag * 2,
            width: shag * 1,
            height: shag * 5,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 12,
            top: centreY + shag * 2,
            width: shag * 1,
            height: shag * 5,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 5,
            top: centreY - shag * 6,
            width: shag * 6,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 11,
            top: centreY - shag * 4,
            width: shag * 3,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 6,
            top: centreY + shag * 2,
            width: shag * 9,
            height: shag * 1,
        },
        {
            class_name: 'way',
            class_list: 'tropa',
            left: centreX + shag * 12,
            top: centreY + shag * 6,
            width: shag * 3,
            height: shag * 1,
        },
    ],
    objects: [
        {
            class_name: 'All',
            class_list: 'look-1',
            left: centreX + shag * 2,
            top: centreY - shag * 5,
            point: {
                hint: false,
                // ID: 10,
                // type: 'logTask',
                // text: ``,
            }
        },
        {
            class_name: 'All',
            class_list: 'look-2',
            left: centreX + shag * 0,
            top: centreY + shag * 6,
            point: {
                hint: false,
                // ID: 10,
                // type: 'logTask',
                // text: ``,
            }
        },
        {
            class_name: 'All',
            class_list: 'look-3',
            left: centreX + shag * 14,
            top: centreY + shag * 0,
            point: {
                hint: false,
                // ID: 10,
                // type: 'logTask',
                // text: ``,
            }
        },
        // {
        //     class_name: 'obj',
        //     class_list: 'fantan',
        //     left: centreX - shag * 2,
        //     top: centreY - shag * 4,
        // },
    ],
    exit: [
        {
            inLevel: 8,
            locationExit: 'Left',
            levelExit: 9,
            nameLevel: 'Улица с фонтаном',
            width: 1,
            height: 1,
            top: centreY / shag,
            left: leftEdge / shag + 1
        },
        {
            inLevel: 7,
            locationExit: 'Left',
            levelExit: 9,
            nameLevel: '',
            width: 1,
            height: 2,
            top: centreY / shag,
            left: rightEdge / shag - 1
        },
        {
            inLevel: 7,
            locationExit: 'Up',
            levelExit: 9,
            nameLevel: '',
            width: 2,
            height: 1,
            top: downEdge / shag - 1,
            left: centreX / shag
        },
        {
            inLevel: 10,
            locationExit: 'Up',
            levelExit: 9,
            nameLevel: '',
            width: 1,
            height: 1,
            top: upEdge / shag,
            left: centreX / shag
        },
    ],
}
)

//-----------------------------Уровень №10---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-10'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------
// shag = 50
// tropa(level.className,
//     width = 2,
//     height = downEdge / shag + 3,
//     top = upEdge / shag - 1,
//     left = centreX / shag);


// exitLevel(inLevel = 13,
//     locationExit = 'Up',
//     levelExit = 10,
//     nameLevel = 'Дорога',
//     width = 2,
//     height = 1,
//     top = upEdge / shag,
//     left = centreX / shag)
// exitLevel(inLevel = 7,
//     locationExit = 'Down',
//     levelExit = 10,
//     nameLevel = 'Сквер',
//     width = 2,
//     height = 1,
//     top = downEdge / shag + 1,
//     left = centreX / shag)
// //-----------------------------Уровень №11---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-11'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------

// tropa(level.className,
//     width = 2,
//     height = downEdge / shag + 3,
//     top = upEdge / shag - 1,
//     left = centreX / shag);
// tropa(level.className,
//     width = 6,
//     height = downEdge / shag,
//     top = upEdge / shag - 1,
//     left = centreX / shag - 2);


// exitLevel(inLevel = 12,
//     locationExit = 'Up',
//     levelExit = 11,
//     nameLevel = 'Сквер',
//     width = 6,
//     height = 1,
//     top = upEdge / shag,
//     left = centreX / shag - 2)
// exitLevel(inLevel = 8,
//     locationExit = 'Down',
//     levelExit = 11,
//     nameLevel = 'Улица с фантаном',
//     width = 2,
//     height = 1,
//     top = downEdge / shag + 1,
//     left = centreX / shag)
// //-----------------------------Уровень №12---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-12'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------


// tropa(level.className,
//     width = 2,
//     height = downEdge / shag - 1,
//     top = upEdge / shag - 1,
//     left = centreX / shag);
// tropa(level.className,
//     width = 6,
//     height = downEdge / shag + 3,
//     top = upEdge / shag + 1,
//     left = centreX / shag - 2);


// exitLevel(inLevel = 14,
//     locationExit = 'Up',
//     levelExit = 12,
//     nameLevel = 'Магазин',
//     width = 2,
//     height = 1,
//     top = upEdge / shag,
//     left = centreX / shag)
// exitLevel(inLevel = 11,
//     locationExit = 'Down',
//     levelExit = 12,
//     nameLevel = 'Главный выход',
//     width = 6,
//     height = 1,
//     top = downEdge / shag + 1,
//     left = centreX / shag - 2)
// //-----------------------------Уровень №13---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-13'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------


// tropa(level.className,
//     width = 2,
//     height = downEdge / shag + 3,
//     top = upEdge / shag - 1,
//     left = centreX / shag);
// tropa(level.className,
//     width = rightEdge / shag + 3,
//     height = 6,
//     top = centreY / shag - 2,
//     left = 0);


// exitLevel(inLevel = 16,
//     locationExit = 'Up',
//     levelExit = 13,
//     nameLevel = 'Забор',
//     width = 2,
//     height = 1,
//     top = upEdge / shag,
//     left = centreX / shag)
// exitLevel(inLevel = 10,
//     locationExit = 'Down',
//     levelExit = 13,
//     nameLevel = 'Запасной выход',
//     width = 2,
//     height = 1,
//     top = downEdge / shag + 1,
//     left = centreX / shag)
// //-----------------------------Уровень №14---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-14'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------


// tropa(level.className,
//     width = 2,
//     height = centreY / shag + 3,
//     top = centreY / shag,
//     left = centreX / shag);
// tropa(level.className,
//     width = centreX / shag + 3,
//     height = 2,
//     top = centreY / shag + 2,
//     left = centreX / shag);

// exitLevel(inLevel = 15,
//     locationExit = 'Right',
//     levelExit = 14,
//     nameLevel = 'Тратуар',
//     width = 1,
//     height = 2,
//     top = centreY / shag + 2,
//     left = rightEdge / shag)
// exitLevel(inLevel = 12,
//     locationExit = 'Down',
//     levelExit = 14,
//     nameLevel = 'Сквер',
//     width = 2,
//     height = 1,
//     top = downEdge / shag + 1,
//     left = centreX / shag)
// //-----------------------------Уровень №15---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-15'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------


// tropa(level.className,
//     width = 2,
//     height = centreY / shag + 4,
//     top = 0,
//     left = centreX / shag - 2);
// tropa(level.className,
//     width = 7,
//     height = downEdge / shag + 4,
//     top = 0,
//     left = centreX / shag + 2);
// tropa(level.className,
//     width = centreX / shag,
//     height = 2,
//     top = centreY / shag + 2,
//     left = 0);

// exitLevel(inLevel = 20,
//     locationExit = 'Up',
//     levelExit = 15,
//     nameLevel = 'Вход в "Большой Сквер Любви"',
//     width = 2,
//     height = 1,
//     top = upEdge / shag,
//     left = centreX / shag - 2)
// exitLevel(inLevel = 14,
//     locationExit = 'Left',
//     levelExit = 15,
//     nameLevel = 'Магазин',
//     width = 1,
//     height = 2,
//     top = centreY / shag + 2,
//     left = leftEdge / shag + 1)
// //-----------------------------Уровень №16---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-16'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------


// tropa(level.className,
//     width = 2,
//     height = centreY / shag + 4,
//     top = centreY / shag + 2,
//     left = centreX / shag);
// tropa(level.className,
//     width = 1,
//     height = centreY / shag,
//     top = 0,
//     left = centreX / shag);

// tropa(level.className,
//     width = centreX / shag,
//     height = 2,
//     top = centreY / shag,
//     left = centreY / shag);


// exitLevel(inLevel = 18,
//     locationExit = 'Up',
//     levelExit = 16,
//     nameLevel = 'Проход через забор',
//     width = 1,
//     height = 1,
//     top = upEdge / shag,
//     left = centreX / shag)
// exitLevel(inLevel = 13,
//     locationExit = 'Down',
//     levelExit = 16,
//     nameLevel = 'Дорога',
//     width = 2,
//     height = 1,
//     top = downEdge / shag + 1,
//     left = centreX / shag)
// //-----------------------------Уровень №17---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-17'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------


// tropa(level.className,
//     width = 4,
//     height = 1,
//     top = centreY / shag,
//     left = 0);
// tropa(level.className,
//     width = 1,
//     height = 12,
//     top = centreY / shag - 5,
//     left = 4);
// tropa(level.className,
//     width = rightEdge / shag,
//     height = 1,
//     top = centreY / shag,
//     left = rightEdge / shag - 4);
// tropa(level.className,
//     width = 1,
//     height = 12,
//     top = centreY / shag - 5,
//     left = rightEdge / shag - 4);


// exitLevel(inLevel = 18,
//     locationExit = 'Left',
//     levelExit = 17,
//     nameLevel = 'Заросли',
//     width = 1,
//     height = 1,
//     top = centreY / shag,
//     left = leftEdge / shag)
// exitLevel(inLevel = 19,
//     locationExit = 'Right',
//     levelExit = 17,
//     nameLevel = 'Сквер',
//     width = 2,
//     height = 1,
//     top = centreY / shag,
//     left = rightEdge / shag)
// //-----------------------------Уровень №18---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-18'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------



// tropa(level.className,
//     width = 1,
//     height = 3,
//     top = centreY / shag + 5,
//     left = centreX / shag);
// tropa(level.className,
//     width = 2,
//     height = 1,
//     top = centreY / shag + 5,
//     left = centreX / shag - 2);
// tropa(level.className,
//     width = 1,
//     height = 3,
//     top = centreY / shag + 2,
//     left = centreX / shag - 2);
// tropa(level.className,
//     width = 4,
//     height = 1,
//     top = centreY / shag + 2,
//     left = centreX / shag - 4);
// tropa(level.className,
//     width = 1,
//     height = 5,
//     top = centreY / shag + 2,
//     left = centreX / shag - 4);
// tropa(level.className,
//     width = 4,
//     height = 1,
//     top = centreY / shag + 4,
//     left = centreX / shag - 6);
// tropa(level.className,
//     width = 1,
//     height = 7,
//     top = centreY / shag - 3,
//     left = centreX / shag - 6);
// tropa(level.className,
//     width = 4,
//     height = 1,
//     top = centreY / shag - 3,
//     left = centreX / shag - 6);
// tropa(level.className,
//     width = 6,
//     height = 1,
//     top = centreY / shag,
//     left = centreX / shag - 8);
// tropa(level.className,
//     width = 1,
//     height = 4,
//     top = centreY / shag - 4,
//     left = centreX / shag - 2);
// tropa(level.className,
//     width = 3,
//     height = 1,
//     top = centreY / shag - 4,
//     left = centreX / shag - 2);
// tropa(level.className,
//     width = 1,
//     height = 3,
//     top = centreY / shag - 4,
//     left = centreX / shag);
// tropa(level.className,
//     width = 3,
//     height = 1,
//     top = centreY / shag - 1,
//     left = centreX / shag);
// tropa(level.className,
//     width = 1,
//     height = 3,
//     top = centreY / shag - 1,
//     left = centreX / shag + 3);
// tropa(level.className,
//     width = 3,
//     height = 1,
//     top = centreY / shag + 1,
//     left = centreX / shag + 2);
// tropa(level.className,
//     width = 1,
//     height = 3,
//     top = centreY / shag + 1,
//     left = centreX / shag + 4);
// tropa(level.className,
//     width = 4,
//     height = 1,
//     top = centreY / shag + 3,
//     left = centreX / shag);
// tropa(level.className,
//     width = 4,
//     height = 1,
//     top = centreY / shag + 2,
//     left = centreX / shag + 4);
// tropa(level.className,
//     width = 1,
//     height = 3,
//     top = centreY / shag + 2,
//     left = centreX / shag + 6);
// tropa(level.className,
//     width = 4,
//     height = 1,
//     top = centreY / shag + 5,
//     left = centreX / shag + 6);
// tropa(level.className,
//     width = 2,
//     height = 1,
//     top = centreY / shag + 2,
//     left = centreX / shag + 10);
// tropa(level.className,
//     width = 1,
//     height = 4,
//     top = centreY / shag + 2,
//     left = centreX / shag + 10);
// tropa(level.className,
//     width = 1,
//     height = 3,
//     top = centreY / shag,
//     left = centreX / shag + 12);
// tropa(level.className,
//     width = centreX,
//     height = 1,
//     top = centreY / shag,
//     left = centreX / shag + 12);



// exitLevel(inLevel = 16,
//     locationExit = 'Down',
//     levelExit = 18,
//     nameLevel = 'Проход через забор',
//     width = 1,
//     height = 1,
//     top = downEdge / shag + 1,
//     left = centreX / shag)
// exitLevel(inLevel = 17,
//     locationExit = 'Right',
//     levelExit = 18,
//     nameLevel = 'Пруд',
//     width = 2,
//     height = 1,
//     top = centreY / shag,
//     left = rightEdge / shag + 1)

// //-----------------------------Уровень №19---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-19'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------


// tropa(level.className,
//     width = 4,
//     height = 1,
//     top = centreY / shag,
//     left = 0);
// tropa(level.className,
//     width = rightEdge / shag,
//     height = 2,
//     top = centreY / shag,
//     left = 4);
// tropa(level.className,
//     width = 2,
//     height = centreY / shag,
//     top = 0,
//     left = centreX / shag);



// exitLevel(inLevel = 17,
//     locationExit = 'Left',
//     levelExit = 19,
//     nameLevel = 'Пруд',
//     width = 1,
//     height = 1,
//     top = centreY / shag,
//     left = leftEdge / shag)
// exitLevel(inLevel = 20,
//     locationExit = 'Right',
//     levelExit = 19,
//     nameLevel = 'Выход "Большой Сквер Любви"',
//     width = 2,
//     height = 2,
//     top = centreY / shag,
//     left = rightEdge / shag)
// exitLevel(inLevel = 21,
//     locationExit = 'Up',
//     levelExit = 19,
//     nameLevel = 'Тебе Сюда',
//     width = 2,
//     height = 1,
//     top = upEdge / shag,
//     left = centreX / shag)


// //-----------------------------Уровень №20---------------------------------------------------------------
// level = document.createElement('div')
// level.className = 'local-20'
// level.style.display = 'none'
// way = document.createElement('div')
// way.className = 'tropa'
// exit_loc = document.createElement('div')
// exit_loc.className = 'exit'
// level.appendChild(way)
// level.appendChild(exit_loc)
// document.querySelector('body').appendChild(level)
// // ----------------------Создание уровня----------------------------------


// tropa(level.className,
//     width = 2,
//     height = downEdge / shag + 4,
//     top = 0,
//     left = centreX / shag - 2);
// tropa(level.className,
//     width = 7,
//     height = downEdge / shag + 4,
//     top = 0,
//     left = centreX / shag + 2);
// tropa(level.className,
//     width = centreX / shag,
//     height = 2,
//     top = centreY / shag,
//     left = 0);

// exitLevel(inLevel = 15,
//     locationExit = 'Down',
//     levelExit = 20,
//     nameLevel = 'Тратуар',
//     width = 2,
//     height = 1,
//     top = downEdge / shag,
//     left = centreX / shag - 2)
// exitLevel(inLevel = 19,
//     locationExit = 'Left',
//     levelExit = 20,
//     nameLevel = '"Большой Сквер Любви"',
//     width = 1,
//     height = 2,
//     top = centreY / shag,
//     left = leftEdge / shag + 1)

//-----------------------------Уровень №21---------------------------------------------------------------
creatLevel(option = {
    name: 10, display: true,
    textures: [
        {
            class_name: 'way',
            class_list: 'stonePlatform',
            left: centreX - shag * 3,
            top: centreY - shag*3,
            width: shag * 8,
            height: shag * 6,
        },
        {
            class_name: 'way',
            class_list: 'stonePlatform-2',
            left: centreX ,
            top: centreY + shag*3,
            width: shag * 2,
            height: downEdge,
        },
        {
            class_name: 'object',
            class_list: 'ground',
            left: centreX - shag ,
            top: centreY ,
            width: shag*4 ,
            height: downEdge,
        },
        {
            class_name: 'way',
            class_list: 'carpet',
            left: centreX ,
            top: centreY - shag,
            width: shag*2 ,
            height: shag * 5,
        },
    ],
    objects: [
        {
            class_name: 'obj',
            class_list: 'Ring',
            left: centreX + shag,
            top: centreY - shag,
        },
        {
            class_name: 'obj',
            class_list: 'Arka',
            left: centreX - shag * 2,
            top: centreY - shag * 5,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX - shag,
            top: centreY + shag * 4,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX + shag * 2,
            top: centreY + shag * 4,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX - shag,
            top: centreY + shag * 6,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX + shag * 2,
            top: centreY + shag * 6,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX - shag,
            top: centreY + shag * 8,
        },
        {
            class_name: 'obj',
            class_list: 'flashlight',
            left: centreX + shag * 2,
            top: centreY + shag * 8,
        },
        {
            class_name: 'obj',
            class_list: 'boy',
            left: centreX + shag ,
            top: centreY -shag,
        },
        {
            class_name: 'All',
            class_list: 'Point',
            left: centreX,
            top: downEdge - shag ,
            point: {
                hint: false,
                ID: 'final',
                type: 'logTask',
                text: ``,
            }
        },

    ],
    exit: [
        // {
        //     inLevel: 1,
        //     locationExit: 'Left',
        //     levelExit: 3,
        //     nameLevel: 'Большой дуб',
        //     width: 1,
        //     height: 2,
        //     top: centreY / shag + 3,
        //     left: leftEdge / shag
        // },
        {
            inLevel: 0,
            locationExit: 'Down',
            levelExit: 10,
            nameLevel: '',
            width: 2,
            height: 1,
            top: downEdge / shag + 1,
            left: centreX / shag
        },
    ],

}
)




blokMotion('flashlight',1)
blokMotion('flashlight-2',1)
blokMotion('sculpure',2)
blokMotion('sculpure-2',2)
blokMotion('sculpure-3',2)
