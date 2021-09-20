

let slider = document.getElementById("customRange");
let output = document.getElementById("demo");
let card1 = document.getElementsByClassName("card_1");
let card2 = document.getElementsByClassName("card_2");
let card3 = document.getElementsByClassName("card_3");
let card_h1 = document.getElementsByClassName("card_h_1");
let card_h2 = document.getElementsByClassName("card_h_2");
let card_h3 = document.getElementsByClassName("card_h_3");


slider.oninput = function() {
    if(this.value <= 10){
        card1[0].classList.add("border-primary");
        card2[0].classList.remove("border-primary");
        card3[0].classList.remove("border-primary");
    }
    if(this.value > 10 && this.value <=20){
        card2[0].classList.add("border-primary");
        card1[0].classList.remove("border-primary");
        card3[0].classList.remove("border-primary");
    }
    if(this.value > 20 && this.value <=30){
        card3[0].classList.add("border-primary");
        card1[0].classList.remove("border-primary");
        card2[0].classList.remove("border-primary");
    }
    output.innerHTML = this.value;
}
