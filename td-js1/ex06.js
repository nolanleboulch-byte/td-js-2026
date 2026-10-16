const prompt = require(`prompt-sync`)();
let age=prompt("quel est votre age: ");
age=Number(age);
console.log(`vous avez: ${age}`);

if(age<18){
	resultat="Mineur";
}
if (age>=18){
	resultat="Majeur";
}
if (age>=65){
	resultat="Senior";
}
console.log(resultat);