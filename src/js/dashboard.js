function atualizarTimes() {
    var teamOneInput = document.getElementById('team-one').value;
    var teamTwoInput = document.getElementById('team-two').value;
    var maxCharacterLimit = 3; // Limite máximo de caracteres permitidos

    // Verifica e limita o número de caracteres para o time 1
    if (teamOneInput.length > maxCharacterLimit) {
        teamOneInput = teamOneInput.substring(0, maxCharacterLimit);
    }

    // Verifica e limita o número de caracteres para o time 2
    if (teamTwoInput.length > maxCharacterLimit) {
        teamTwoInput = teamTwoInput.substring(0, maxCharacterLimit);
    }

    var scoreTeamOne = document.getElementById('score-team-one');
    var scoreTeamTwo = document.getElementById('score-team-two');

    scoreTeamOne.textContent = teamOneInput.toUpperCase();
    scoreTeamTwo.textContent = teamTwoInput.toUpperCase();
}

function atualizarPlacares() {
    var teamOneScoreInput = document.getElementById('team-one-score').value;
    var teamTwoScoreInput = document.getElementById('team-two-score').value;
    var teamOneScoreDisplay = document.getElementById('team-one-score-display');
    var teamTwoScoreDisplay = document.getElementById('team-two-score-display');
    
    if (teamOneScoreInput < 1 || teamOneScoreInput > 10) {
        alert("O placar do Time 1 deve estar entre 1 e 10.");
        return;
    }
    
    if (teamTwoScoreInput < 1 || teamTwoScoreInput > 10) {
        alert("O placar do Time 2 deve estar entre 1 e 10.");
        return;
    }
    
    teamOneScoreDisplay.textContent = teamOneScoreInput;
    teamTwoScoreDisplay.textContent = teamTwoScoreInput;
}

function atualizarCores() {
    var teamOneColorInput = document.getElementById('team-one-color').value;
    var teamTwoColorInput = document.getElementById('team-two-color').value;
    var firstTeam = document.querySelector('.first-name-team');
    var secondTeam = document.querySelector('.second-name-team');

    firstTeam.style.setProperty('--team-one-color', teamOneColorInput);
    secondTeam.style.setProperty('--team-two-color', teamTwoColorInput);
}