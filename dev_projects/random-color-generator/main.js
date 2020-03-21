//const lightBackground = document.getElementById('background');
//
//lightBackground.style.background = 'white';


//Change color on boxes

const randomNumber = () => {
    return Math.floor(Math.random() * 255)
};

const randomRGBColor = () => {
    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
};

const addRandomColorToElement = (element) => {
    const returnedRandomRGBColor = randomRGBColor();
    element.style.background = returnedRandomRGBColor;
    element.innerHTML = returnedRandomRGBColor;
    
}

const boxArray = Array.from(document.getElementsByClassName('color-box'));

boxArray.forEach((box) => {
    box.addEventListener('click', (event) => {
        addRandomColorToElement(event.target)
    })
});


//Change background color

const changeBackgroundColor = (color) => { 
    document.body.style.background = color; 
} 
              
const darkBackground = () => {
    changeBackgroundColor('rgb(21, 21, 21)'); 
}
              
const lightBackground = () => { 
    changeBackgroundColor('rgb(255, 249, 240)');
}






