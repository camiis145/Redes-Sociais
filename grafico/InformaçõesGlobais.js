const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizaInformaçoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt (dados.tempo_medio)
    const porcetagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2);
    console.log(dados);
    const paragrafo = document.createElement("p")
    paragrafo.classList.add('grafico-container_texto')
    paragrafo.innerHTML = 'Você sabia que o mundo tem $(dados.total_pessoa_mundo) de pesoas e que aproximadamente $(dados.total_pessoas_conectadas) estão conectadas em alguma rede social e passam emmédia $(dado.tempo_medio) hora conectado'
    const container = document.getElementById ('grafico-container')
    container.appendChild(paragrafo)
}
visualizaInformaçoesGlobais()