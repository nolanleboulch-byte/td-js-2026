const prompt = require(`prompt-sync`)();
let taille=prompt("quel est votre taille: ");
taille=Number(taille);
let poids=prompt("quel est votre poids en kg: ");
poids=Number(poids);
const IMC=(poids/(taille*taille)).toFixed(1);
console.log(`IMC: ${IMC}`);
let resulat="obésité";
if(IMC<18.5){
	resultat="Insuffisante pondérale";
}
else if (IMC<25){
	resultat="Corpulence normal";
}
else if (IMC<30){
	resultat="surpoids";
}
console.log(resultat);