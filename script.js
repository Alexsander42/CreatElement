const elementJs = document.createElement("div")
elementJs.innerHTML = `
    <h1 id="titulo">Cursos de Progração Proz Eoducação</h1><br><br>
    <p>Técnico em Desenvolvimento de Sistemas
    Média salarial:  entre R$ 2.600 e R$ 3.500 por mês
    
    O mercado de tecnologia da informação tem crescido significativamente nos últimos anos e a tendência é de que continue em expansão, o que abre oportunidades para os técnicos em Desenvolvimento de Sistemas.
    O curso técnica irá capacitar o aluno para atuar no desenvolvimento de softwares e sistemas computacionais, aplicando técnicas e ferramentas específicas para a criação e manutenção de programas.</p>
`

const post = document.querySelector("body")
post.appendChild(elementJs)