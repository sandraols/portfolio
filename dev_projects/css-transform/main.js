//const ballOne = document.getElementById('ball1');



//ballOne.style.background = 'black';

//gråskale random
//const colorOne = Math.floor(Math.random() * 255);
//const colorTwo = Math.floor(Math.random() * 255);
//
//ballOne.style.background = `linear-gradient(60deg, rgb(${colorOne}, ${colorOne}, ${colorOne}), rgb(${colorTwo}, ${colorTwo}, ${colorTwo}))`



//const colorOne = Math.floor(Math.random() * 255);
//const colorTwo = Math.floor(Math.random() * 255);
//const colorThree = Math.floor(Math.random() * 255);
//const colorFour = Math.floor(Math.random() * 255);
//const colorFive = Math.floor(Math.random() * 255);
//const colorSix = Math.floor(Math.random() * 255);
//
//ballOne.style.background = `linear-gradient(60deg, rgb(${colorOne}, ${colorTwo}, ${colorThree}), rgb(${colorFour}, ${colorFive}, ${colorSix}))`;
//
//
//
//const randomNumber = () => {
//    return Math.floor(Math.random() * 255)
//};
//ballOne.style.background = `linear-gradient(60deg, rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}), rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}))`;
//
//
//
//
//const randomNumber = () => {
//    return Math.floor(Math.random() * 255)
//};
//const randomRGBColor = () => {
//    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
//};
//
//ballOne.style.background = `linear-gradient(60deg, ${randomRGBColor()}, ${randomRGBColor()})`;





//const randomNumber = () => {
//    return Math.floor(Math.random() * 255)
//};
//const randomRGBColor = () => {
//    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
//};
//const randomGradient = () => {
//    return `linear-gradient(60deg, ${randomRGBColor()}, ${randomRGBColor()})`
//};
//ballOne.style.background = randomGradient();








//const sayHello = function() {
//    console.log('hello');
//};
//ballOne.addEventListener('click', sayHello);


//const randomNumber = () => {
//    return Math.floor(Math.random() * 255)
//};
//const randomRGBColor = () => {
//    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
//};
//const randomGradient = () => {
//    return `linear-gradient(${Math.floor(Math.random() * 90)}deg, ${randomRGBColor()}, ${randomRGBColor()})`
//};
//
//
//
//ballOne.addEventListener('click', function(event){
//    event.target.style.background = randomGradient();
//});
//
//
//
//
//const addRandomGradientToElement = (element) => {
//    element.style.background = randomGradient();
//}
//ballOne.addEventListener('click', function(event){
//    addRandomGradientToElement(event.target);
//});
//





const randomNumber = () => {
    return Math.floor(Math.random() * 255)
};
const randomRGBColor = () => {
    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
};
const randomGradient = () => {
    return `linear-gradient(${Math.floor(Math.random() * 90)}deg, ${randomRGBColor()}, ${randomRGBColor()})`
};
const addRandomGradientToElement = (element) => {
    element.style.background = randomGradient();
}
const ballArray = document.getElementsByClassName('ball');

for(let i = 0; i < ballArray.length; i++) {
    ballArray[i].addEventListener('click', function(event){
        addRandomGradientToElement(event.target);
    });
}



















// OLOF 1337 version

//const randomNumber = () => Math.floor(Math.random() * 255)
//const randomRGBColor = () => `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
//const randomGradient = () => `linear-gradient(${Math.floor(Math.random() * 90)}deg, ${randomRGBColor()}, ${randomRGBColor()})`
//const addRandomGradientToElement = element => element.style.background = randomGradient()
//const ballArray = Array.from(document.getElementsByClassName('ball'));
//ballArray.forEach(ball => ball.addEventListener('click', event => addRandomGradientToElement(event.target)))
