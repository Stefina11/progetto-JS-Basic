// -----------------title-----------------------------------------------------//
document.getElementById("title").innerHTML = "Money Counter";

// -----------------PULSANTI----------------------------------------------------//

function createButton(stringa) {
   const newButton = document.createElement("button");
   newButton.textContent = stringa;
   return newButton;
}

const buttonPlus =  createButton("+");
plusButton.appendChild(buttonPlus);

const buttonMinus =  createButton("-");
minusButton.appendChild(buttonMinus);

const buttonReset =  createButton("Reset");
resetButton.appendChild(buttonReset);

// -----------------COUNTER----------------------------------------------------//

buttonPlus.addEventListener("click", function() {
   incrementaContatore(count.textContent);
   getDyanamicImg();
});

buttonMinus.addEventListener("click", function() {
   decrementaContatore(count.textContent);
   getDyanamicImg();
});


// funzione incremento contatore //
function incrementaContatore (valore) {
valore ++;
count.textContent = valore;
}

// funzione decremento contatore //
function decrementaContatore (valore) {
   valore --;
   count.textContent = valore;
  }

// -----------------AUDIO----------------------------------------------------//

//......+.........//
let audioPlus = new Audio ("./assets/audio/coin.mp3");
buttonPlus.addEventListener("click", function(){
   audioPlus.play();  
})

//......-.........//
let audioMinus = new Audio ("./assets/audio/notcoin.mp3");
buttonMinus.addEventListener("click", function(){
   audioMinus.play();  
})

// -----------------CHANGE IMAGE----------------------------------------------------//

const static = document.getElementById("pig");
const gif = document.getElementById("pigGif");


function getDyanamicImg() {

       gif.style.display = "flex";
       static.style.display = "none";
       count.style.marginLeft = "50%";
    
       moneyCounter.insertBefore(gif, static);
   }

function getStaticImg () {
   gif.style.display = "none";
   static.style.display = "flex";
   moneyCounter.insertBefore (static, gif);
}

// -----------------RESET----------------------------------------------------//

let reset = 0;

buttonReset.addEventListener("click", function(){
getStaticImg();

   count.textContent = reset;
   count.append(reset);

   
})