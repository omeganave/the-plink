function updatePlayerFields() {
    const numPlayers = document.getElementById('numPlayers').value;
    const form = document.getElementById('startGameForm');
    const nextButton = document.getElementById('nextButton');

    nextButton.disabled = true;

    const existingPlayerFields = document.querySelectorAll('[id^="player"]');
    existingPlayerFields.forEach(field => field.remove());

    for (let i = 0; i < numPlayers; i++) {
        const label = document.createElement('label');
        label.setAttribute('for', `player${i+1}`);
        label.textContent = `Player ${i+1} Name:`;

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', `player${i+1}`);
        input.setAttribute('required', 'true');

        form.appendChild(label);
        form.appendChild(input);
    }

    const button = document.createElement('button');
    button.textContent = 'Start Game';
    button.type = 'submit';
    form.appendChild(button);
}