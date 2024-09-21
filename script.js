const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

const storyData = {
    start: {
        text: "Você é um herói em um reino ameaçado por um dragão. Você deve decidir como proceder.",
        choices: [
            { text: "Ir à vila para buscar aliados", next: 'village' },
            { text: "Explorar a caverna do dragão", next: 'cave' }
        ]
    },
    village: {
        text: "Na vila, você encontra guerreiros dispostos a ajudar. Você pode treiná-los ou partir imediatamente.",
        choices: [
            { text: "Treinar os guerreiros", next: 'train' },
            { text: "Partir imediatamente", next: 'battle' }
        ]
    },
    cave: {
        text: "Você se aproxima da caverna do dragão e ouve um rugido aterrador. Você pode entrar ou voltar.",
        choices: [
            { text: "Entrar na caverna", next: 'insideCave' },
            { text: "Voltar para a vila", next: 'village' }
        ]
    },
    train: {
        text: "Você passa semanas treinando os guerreiros. Agora estão prontos para a batalha!",
        choices: [
            { text: "Partir para a batalha", next: 'battle' }
        ]
    },
    insideCave: {
        text: "Dentro da caverna, você encontra o dragão dormindo. Você pode atacá-lo ou tentar se esconder.",
        choices: [
            { text: "Atacar o dragão", next: 'fightDragon' },
            { text: "Tentar se esconder", next: 'hide' }
        ]
    },
    battle: {
        text: "Você e seus aliados enfrentam o dragão. A batalha é intensa e você precisa decidir rapidamente.",
        choices: [
            { text: "Usar uma magia poderosa", next: 'magic' },
            { text: "Lutar corpo a corpo", next: 'melee' }
        ]
    },
    fightDragon: {
        text: "Você ataca o dragão com todas as suas forças, mas ele acorda e voa para longe. Você ficou sem opções.",
        choices: [
            { text: "Voltar para a vila", next: 'village' },
            { text: "Tentar novamente", next: 'insideCave' }
        ]
    },
    hide: {
        text: "O dragão acorda, mas não te vê. Você decide sair da caverna e ir para a vila.",
        choices: [
            { text: "Voltar para a vila", next: 'village' }
        ]
    },
    magic: {
        text: "A magia é poderosa e derrota o dragão! O reino é salvo e você se torna um herói lendário.",
        choices: []
    },
    melee: {
        text: "Você luta bravamente, mas o dragão é muito forte e você é derrotado. O reino fica em perigo.",
        choices: []
    }
};

function startStory() {
    showStory('start');
}

function showStory(key) {
    const story = storyData[key];
    storyElement.textContent = story.text;
    choicesElement.innerHTML = '';

    story.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesElement.appendChild(button);
    });
}

// Iniciar a história ao carregar a página
window.onload = startStory;
