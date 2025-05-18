function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('user-choice').textContent = `You chose: ${capitalize(userChoice)}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${capitalize(computerChoice)}`;
  
    const outcome = getResult(userChoice, computerChoice);
    document.getElementById('outcome').textContent = `Result: ${outcome}`;
  }
  
  function getResult(user, computer) {
    if (user === computer) return "It's a tie!";
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  