let tabs = document.querySelectorAll('.our-services-tabs-item')

let tabContent = document.querySelectorAll('.our-services article')

tabs.forEach((item) => item.addEventListener('click', function (event) {
    let attribute = item.getAttribute('data-title')

    tabs.forEach((item) => item.classList.remove('active'))
    tabContent.forEach((elem) => elem.style.display = 'none')

    item.classList.add('active')
    tabContent.forEach((elem) => {
        if (elem.getAttribute('data-content') === attribute) {
            elem.style.display = 'flex'
        }
    })
}))

document.querySelector('.our-services-tabs-item').click()



const buttonWrapper = document.querySelector('.amazing-work-menu')
const buttons = document.querySelectorAll('.amazing-work-menu-item')
const cards = [...document.getElementsByClassName('img-section')]

buttons.forEach((item) => item.addEventListener('click', function (e) {
    let attribute = item.getAttribute('data-filter')

    buttons.forEach((item) => item.classList.remove('active-filter'))
    cards.forEach((elem) => elem.style.display = 'none')

    item.classList.add('active-filter')
    
    cards.forEach((elem) => {
        if (elem.classList.contains(attribute) && !elem.classList.contains('hidden')) {
            elem.style.display = 'block'
        }

        if (attribute === 'all' && !elem.classList.contains('hidden')) {
            elem.style.display = 'block'
        }
    })
}))

let loadBtn = document.querySelector('.load-work')
let loader = document.querySelector('.loader-work')

loadBtn.addEventListener('click', (e) => {
    let hiddenImg = [...document.getElementsByClassName('img-section hidden')]
    loadBtn.style.display = 'none'
    loader.style.display = 'flex'
    setTimeout(() => {
        loader.style.display = 'none'
        loadBtn.style.display = 'flex'
        if (hiddenImg.length <= 12) {
            loadBtn.style.display = 'none'
        }
        let imgForShow = hiddenImg.slice(0, 12)
        let filterCategory = [...document.getElementsByClassName('amazing-work-menu-item active-filter')]
        let attribute = filterCategory[0].dataset.filter

        imgForShow.forEach((elem) => {
            elem.classList.remove('hidden')
            if (elem.classList.contains(attribute)) {
                elem.style.display = 'block'    
            }
            if(attribute === 'all') {
                elem.style.display = 'block'    
            }
  
        })
        }, 2000)
})

const peopleToggle = document.querySelector('.people-say-toggle')
const peopleImg = [...document.querySelectorAll('.people-photo')]

function toggleContent(content) {
    let img = content.getAttribute('src')
    document.querySelector('.people-say-img').setAttribute('src', img)

    let parent = content.parentNode

    let name = parent.querySelector('h4').textContent
    document.querySelector('.people-say-name').textContent = name

    let profession = parent.querySelector('h5').textContent
    document.querySelector('.people-say-prof').textContent = profession

    let text = parent.querySelector('p').textContent
    document.querySelector('.people-say-text').textContent = text

}

peopleToggle.addEventListener('click', (event) => {
    if (event.target.classList.contains('people-photo')) {
      
    peopleImg.forEach(function (item) {
        item.classList.remove('pressed')

        event.target.classList.add('pressed')
    })

    toggleContent(event.target)
    
    }
})


const toggleLeft = document.querySelector('.toggle-left')
const toggleRight = document.querySelector('.toggle-right')


toggleLeft.addEventListener('click', () => {
    let pressedImage = [...document.getElementsByClassName('people-photo pressed')]
    let indexPressed = peopleImg.indexOf(pressedImage[0])
    document.querySelector('.pressed').classList.remove('pressed')
    if (indexPressed === 0) {
        indexPressed = 4
    }
    peopleImg[indexPressed - 1].classList.add('pressed')
    toggleContent(peopleImg[indexPressed - 1])
})

toggleRight.addEventListener('click', () => {
    let pressedImage = [...document.getElementsByClassName('people-photo pressed')]
    let indexPressed = peopleImg.indexOf(pressedImage[0])
    document.querySelector('.pressed').classList.remove('pressed')
    if (indexPressed === 3) {
        indexPressed = -1
    }
    peopleImg[indexPressed + 1].classList.add('pressed')
    toggleContent(peopleImg[indexPressed + 1])
})

let container = $('.best-images-wrapper')

container.imagesLoaded(function () {
    container.masonry({
        itemSelector: '.best-img-item',
        columnWidth: '.best-img-item',
        gutter: 20,
        horizontalOrder: true,
    })
})

let loadImg = document.querySelector('.load-img')
let loaderImg = document.querySelector('.loader-img')

loadImg.addEventListener('click', (e) => {
    let hiddenImg = [...document.getElementsByClassName('best-img-item hidden')]
    loadImg.style.display = 'none'
    loaderImg.style.display = 'flex'
    setTimeout(() => {
        loaderImg.style.display = 'none'
        if (hiddenImg.length <= 3) {
            loadImg.style.display = 'none'
        } else {loadImg.style.display = 'flex'}
        
        let imgForShow = hiddenImg.slice(0, 3)

        setTimeout(function () {
            imgForShow.forEach((elem) => {
            elem.classList.remove('hidden')
            })
            container.masonry({
                itemSelector: '.best-img-item',
                columnWidth: '.best-img-item',
                gutter: 20,
                horizontalOrder: true,
            })
            
        }, 50)
        }, 2000)
})
