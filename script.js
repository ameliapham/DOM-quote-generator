import './style.css';

let btn = document.querySelector('.button')
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')

const quotes = [{
    quote: '"I want someone who will look at me the same way I look at chocolate cake."',
    author: "unknow"
}, {
    quote: '"If at first you don\'t succeed, have some cake."',
    author: "Charlie Mackesy"
}, {
    quote: '"Being kind to yourself is one of the greatest kindnesses."',
    author: "Charlie Mackesy"
}, {
    quote: '"Nothing beats kindness. It sits quietly beyond all things."',
    author: "Charlie Mackesy"
}, {
    quote: '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."',
    author: "Oprah Winfrey"
},{
    quote: '"My little happiness is a free delicious bubble tea."',
    author: "Huong"
},{
    quote: '"You are the best! And yes you really are."',
    author: "Joseph"
},]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    author.innerText= quotes[random].author
})

const changeColor = (e) => {
    e.target.style.backgroundColor = '#6c3e06'
    e.target.style.color = '#ffe4c4'
}

const revertColor = (e) => {
    e.target.style.backgroundColor = ''
    e.target.style.color = ''
}

btn.addEventListener('mouseover', changeColor)
btn.addEventListener('mouseout', revertColor)