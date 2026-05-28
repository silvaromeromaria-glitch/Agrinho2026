// ÁUDIO EXPLICATIVO

const botaoAudio = document.getElementById("audioBtn");

botaoAudio.addEventListener("click", () => {

    const texto = `
    A agricultura familiar é muito importante para a produção de alimentos,
    preservação ambiental e desenvolvimento sustentável.
    Ela fortalece a economia local e promove práticas agrícolas conscientes.
    `;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    speechSynthesis.speak(fala);
});


// PERGUNTAS E RESPOSTAS

function responderPergunta(){

    const pergunta = document
    .getElementById("pergunta")
    .value
    .toLowerCase();

    const resposta = document.getElementById("resposta");

    if(pergunta.includes("o que é agricultura familiar")){

        resposta.innerHTML =
        "A agricultura familiar é a produção agrícola realizada por famílias no campo.";

    }

    else if(pergunta.includes("sustentabilidade")){

        resposta.innerHTML =
        "Sustentabilidade é produzir alimentos preservando os recursos naturais.";

    }

    else if(pergunta.includes("vantagens")){

        resposta.innerHTML =
        "As vantagens são alimentos saudáveis, preservação ambiental e geração de empregos.";

    }

    else if(pergunta.includes("meio ambiente")){

        resposta.innerHTML =
        "A agricultura sustentável ajuda a proteger o solo, a água e as florestas.";

    }

    else{

        resposta.innerHTML =
        "Pergunta não encontrada. Tente perguntar sobre sustentabilidade, agricultura familiar ou meio ambiente.";

    }
}
