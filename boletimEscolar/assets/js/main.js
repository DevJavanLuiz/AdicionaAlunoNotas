const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function(e){
e.preventDefault();

const inputAluno = e.target.querySelector('#nomeAluno');
const inputNota1 = e.target.querySelector('#nota1');
const inputNota2 = e.target.querySelector('#nota2');
const inputNota3 = e.target.querySelector('#nota3');

const nota1 = Number(inputNota1.value);
const nota2 = Number(inputNota2.value);
const nota3 = Number(inputNota3.value);

const valorMedia = obtendoMedia(nota1,nota2,nota3).toFixed(2);

console.log(inputAluno.value);
console.log(valorMedia);

const nomeVazio = document.querySelector('#tabelaNomeAluno');
nomeVazio.innerHTML = `NOME :  ${inputAluno.value}`;

const mediaVazia = document.querySelector('#tabelaMedia')


const resNota1 = document.querySelector('#resNota1');
const resNota2 = document.querySelector('#resNota2');
const resNota3 = document.querySelector('#resNota3');

resNota1.innerHTML = nota1;
resNota2.innerHTML = nota2;
resNota3.innerHTML = nota3;

if(valorMedia >= 7){
    mediaVazia.innerHTML = `MEDIA :  ${valorMedia}  (ALUNO APROVADO)`;
}
else{
    mediaVazia.innerHTML = `MEDIA :  ${valorMedia}  (ALUNO REPROVADO)`;
}

});

function obtendoMedia (x, y, z){
  return  (x + y + z) /3
}


