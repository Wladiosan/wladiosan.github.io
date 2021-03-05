const slider = {
    arrayImg: [],
    currentIndexImg: 1,
    prevButton: document.getElementById('prevButton'),
    nextButton: document.getElementById('nextButton'),
    imgSlider: document.getElementById('imgSlider'),
    circles: document.getElementsByClassName('circle'),
    currentYear: document.getElementById('rights-year')
}

// Подсветка кружка
chekCounter = counter => {
    for (let i = 0; i < slider.arrayImg.length; i++) {
        slider.circles[i].classList.remove('grey')
    }
    slider.circles[counter].classList.add('grey')
}

// Ограничение кликабельности свише количевства фото
checkDisable = counter => {
    if (counter === 0) {
        slider.prevButton.classList.add('disabled')
    } else if (counter === 2) {
        slider.nextButton.classList.add('disabled')
    } else {
        slider.prevButton.classList.remove('disabled')
        slider.nextButton.classList.remove('disabled')
    }
}

// Кнопка previous photo
onClickPrevButton = props => {
    slider.currentIndexImg--
    slider.imgSlider.src = slider.arrayImg[slider.currentIndexImg]
    chekCounter(slider.currentIndexImg)
    checkDisable(slider.currentIndexImg)

}

// Кнопка next photo
onClickNextButton = props => {
    slider.currentIndexImg++
    slider.imgSlider.src = slider.arrayImg[slider.currentIndexImg]
    chekCounter(slider.currentIndexImg)
    checkDisable(slider.currentIndexImg)
}

// Запуск приложение
init = () => {
    slider.arrayImg.push('img/slider/slider-0.jpeg')
    slider.arrayImg.push('img/slider/slider-1.jpeg')
    slider.arrayImg.push('img/slider/slider-2.jpeg')

    slider.prevButton.addEventListener('click', (e) => onClickPrevButton(e))
    slider.nextButton.addEventListener('click', (e) => onClickNextButton(e))

    slider.circles[0].addEventListener('click', () => chekCounter(0))
    slider.circles[1].addEventListener('click', () => chekCounter(1))
    slider.circles[2].addEventListener('click', () => chekCounter(2))

    slider.imgSlider.src = slider.arrayImg[slider.currentIndexImg]
    slider.circles[slider.currentIndexImg].classList.add('grey')
}

