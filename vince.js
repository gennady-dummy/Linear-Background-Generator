// for(var i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzBuzz')
//     }
//     else if (i % 5 === 0) {
//         console.log('buzz')
//     }
//     else if(i % 3 === 0) {
//         console.log('fizz')
//     }
//     else {
//         console.log(i)
//     }
// }
const mnBackground = document.querySelector('.mn-color')
const input1 = document.querySelector('.color1')
const input2 = document.querySelector('.color2')

const titleLinear = document.querySelector('.title')

const generate = document.querySelector('.generate')
const background = () => {
    mnBackground.style.background = 'linear-gradient( to right, ' + input1.value + ', ' + input2.value + ')';
}

const titleBackground = () => {
    titleLinear.textContent = mnBackground.getAttribute('style');
}


background();
titleBackground();
generate.addEventListener('click', () => {
    background();
    titleBackground();
})