let getId = x => document.getElementById(x);
let getSel = x => document.querySelector(x);

getSel('.block').onmouseover = function() {
    this.style.backgroundColor = 'yellow';
    this.innerText = 'Хочеш знати який?';
    this.style.borderColor = 'black';

}

getSel('.block').onmousedown = function() {
    this.style.backgroundColor = 'black';
    this.innetText = 'А я тобі не скажу!';
    this.style.borderColor = 'yellow'
    this.style.color = 'white';
}

getSel('.block').onmouseup = function() {
    this.style.backgroundColor = 'yellow';
    this.innerText = 'Хочеш знати який?';
    this.style.borderColor = 'black';

}

getSel('.block').onmouseout = function() {
    this.style.backgroundColor = '';
    this.style.borderColor = '';
    this.style.color = 'black';
    this.style.fontSize = '30px';
}