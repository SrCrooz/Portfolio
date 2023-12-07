const form = document.getElementById("form");


form.addEventListener("submit", function(event){

    event.preventDefault();

const peso = document.getElementById("weight").value;

const altura = document.getElementById("height").value;

const imc = peso / (altura * altura)

document.getElementById("infos").classList.remove("hidden");

let descricao;

const campoImc = document.getElementById("value");

campoImc.classList.add("attention");



// condições do Imc


if(imc < 18.5){
    descricao = "Você está a baixo do seu peso!"

}

else if (imc < 9){
    descricao = "MORTE SUBITA!!!"
}


else if ((imc > 18.5) && (imc <= 25) ){
    descricao = "Você está no seu peso ideal";
    campoImc.style.color = "green";
}

else if ((imc > 25) && (imc <= 30) ){
    descricao = "Cuidado! Você está com sobrepeso!";
    campoImc.style.color = "yellow";
}

else if ((imc > 30) && (imc <= 35) ){
    descricao = "Cuidado! Você está com obesidade moderada!";
    campoImc.style.color = "orange";
}

else if ((imc > 35) && (imc <= 40) ){
    descricao = "Cuidado! Você está com obesidade severa!";
    campoImc.style.color = "red";
}


else {
    descricao = "Cuidado! O MAJIN BOO vai morrer ai!";
    campoImc.style.color = "black";
}




campoImc.textContent = imc.toFixed(2)

document.getElementById("description").textContent = descricao;




});

