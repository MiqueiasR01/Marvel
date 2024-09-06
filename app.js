//console.log(dados); // (Comentário opcional: para depuração, mostrando o conteúdo da variável dados)
//console.log(filmesDC[0]); // (Comentário opcional: para depuração, mostrando o primeiro elemento do array filmesDC)

function pesquisar() { 
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for um string sem nada 
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um vingador.<p/>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      //se titulo includes campoPesquisa 
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // Constrói o HTML para cada item da pesquisa, formatando os dados
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
      }

  
    }

    if (!resultados) {
      resultados = "<p>Nada foi encontrado<p/>"
    };
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }

