

const formulario = document.querySelector('#formulario');

const array = [];

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputAluno = document.querySelector('#nomeAluno').value;
    const nota1 = document.querySelector('#nota1');
    const nota2 = document.querySelector('#nota2');
    const nota3 = document.querySelector('#nota3');

    const inputNota1 = Number(nota1.value);
    const inputNota2 = Number(nota2.value);
    const inputNota3 = Number(nota3.value);

    function calcularMedia(nota1, nota2, nota3) {
        return (nota1 + nota2 + nota3) / 3
    }

    const mediaAluno = calcularMedia(inputNota1, inputNota2, inputNota3).toFixed(1);


    if (!inputAluno || !inputNota1 || !inputNota2 || !inputNota3) {
        alert('Preencha todos os campos');
        console.log('ola');
        return
    };

    array.push(
        {
            nome: inputAluno,
            nota01: inputNota1,
            nota02: inputNota2,
            nota03: inputNota3,
            media: mediaAluno
        }
    );

    const tabela = document.querySelector('.corpo-tabela');
    tabela.innerHTML += construiTabela(inputAluno, inputNota1, inputNota2, inputNota3, mediaAluno);

    function construiTabela(nome, nota1, nota2, nota3, media) {

        const tabela =
            (`<tr>
       <td>${nome}</td>
       <td>${nota1}</td>
       <td>${nota2}</td>
       <td>${nota3}</td>
       <td>${media}</td>
   </tr>`);

        return tabela
    }
    const result = resultadoAno(mediaAluno).value;

    result.innerHTML = result

    function resultadoAno(resultado) {

        const result = document.querySelector('.resultado p')

        if (resultado >= 7) {
            result.innerHTML = 'Aluno Aprovado';
            result.classList.add('green');
        }
        else if (resultado < 7) {
            result.innerHTML = 'Aluno Reprovado';
            result.classList.add('red');
        }
        return result;
    }


});