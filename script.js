const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValid = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }

  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  const resultBuild = document.createElement('p');
  resultBuild.className = 'results-text';
  phoneRegex.test(input)
    ? (resultBuild.style.color = '#00471b')
    : (resultBuild.style.color = '#4d3800');
  resultBuild.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  )
  resultsDiv.appendChild(resultBuild)
}

checkBtn.addEventListener('click', () => {
  checkValid(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkValid(userInput.value);
    userInput.value = '';
  }
})

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
})