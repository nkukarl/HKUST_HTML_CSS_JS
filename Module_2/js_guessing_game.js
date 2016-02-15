function do_game() {
	answer = Math.floor(Math.random() * 100) + 1
	cnt = 0
	finished = false
	
	while (!finished) {
		guess = parseInt(prompt('I am thinking of a number between 1 to 100.\n\nWhat is the number?'))
		cnt += 1
		finished = check_guess(guess)
	}
}

function check_guess(guess) {
	if (isNaN(guess)) {
		alert('You have not entered a number.\n\n' + 'Please enter an integer in the range 1 to 100.')
		cnt -= 1
		return false
	}
	if ((guess < 1) || (guess > 100)) {
		alert('Please enter an integer in the range 1 to 100.')
		return false
	}
	if (guess < answer) {
		alert('Your number is too small!')
		return false
	}
	if (guess > answer) {
		alert('Your number is too large!')
		return false
	}
	alert('You got it! The number was ' + answer + '.\n\n' + 'It took you ' + cnt + ' guesses to get the number!')
	return true
}