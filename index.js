let nome = "Omega"
let xp = [1000, 2000, 5000, 7000, 8000, 9000, 10000, 10001]
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

for(let i = 0;  i < 1; i++){
if(xp[0] < 1000){
    console.log("O herói de nome " + nome + " está no nível " + nivel[0])
    break;
}if (xp[0,1] > 1001 && xp < 2000){
    console.log("O herói de nome " + nome + " está no nível " + nivel[0,1])
    break;
}if (xp[0,2] > 2001 && xp > 5000) {
    console.log("O herói de nome " + nome + " está no nível " + nivel[0,2])
    break;
}if(xp[0,3] > 5001 && xp < 7000){
    console.log("O herói de nome " + nome + " está no nível " + nivel[0,3])
    break;
}if(xp[0,4] > 7001 && xp < 8000){
    console.log("O herói de nome " + nome + " está no nível " + nivel[0,4])
    break;
}if(xp[0,5] > 8001 || xp < 9000){
    console.log("O herói de nome " + nome + " está no nível " + nivel[0,5])
    break;
}if(xp[0,6] > 9001 && xp < 10000){
    console.log("O herói de nome " + nome + " está no nível " + nivel[0,6])
    break;
}else if(xp[0,7] >= 10001 ) {
    console.log("O herói de nome " + nome + " está no nível " + nivel[0,7])
    break;
    }
}

console.log("Muito obrigado!")
