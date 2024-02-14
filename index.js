const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para design gráfico",
        "Uma linguagem de programação para desenvolvimento web",
        "Um sistema operacional"
      ],
      correta: 1
    },
    {
      pergunta:
        "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: ["vari x;", "var x;", "let x;"],
      correta: 2
    },
    {
      pergunta:
        "Qual função é usada para exibir uma mensagem de alerta em JavaScript?",
      respostas: ["alertBox();", "msgBox();", "alert();"],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: ["==", "===", "="],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo seu ID",
        "Seleciona um elemento pelo seu nome de classe",
        "Seleciona um elemento pelo seu seletor CSS"
      ],
      correta: 3
    },
    {
      pergunta:
        "Qual é a sintaxe correta para escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "/* Este é um comentário de uma linha */",
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->"
      ],
      correta: 2
    },
    {
      pergunta:
        "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: ["pop()", "remove()", "deleteLast()"],
      correta: 1
    },
    {
      pergunta:
        "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: ["parseInt()", "stringToNumber()", "toNumber()"],
      correta: 1
    },
    {
      pergunta:
        "Qual método é usado para adicionar novos elementos ao final de um array em JavaScript?",
      respostas: ["push()", "append()", "addToEnd()"],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: ["10", "55", "Error"],
      correta: 2
    }
  ]
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  //loop / repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true) //cloneNode é uma função que clona o "nó" referente ao conteúdo do template. O True é um dado booleano que passado pra essa função vai permitir clonar todos os Nodes lá de dentro
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector("span").textContent = resposta
      dt.querySelector("input").setAttribute(
        "name",
        "pergunta-" + perguntas.indexOf(item)
      )
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
  
      dt.querySelector("input").onchange = function (event) {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
      }
  
      quizItem.querySelector("dl").appendChild(dt)
    }
  
    quizItem.querySelector("dl dt").remove()
    quizItem.querySelector("h3").textContent = item.pergunta
    quiz.appendChild(quizItem) // appendChild() é um metodo que adiciona um "filho" ao "nó" especificado. Nesse caso ele pega e coloca a pergunta na tela.
  }
  