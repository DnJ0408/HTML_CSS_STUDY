document.getElementById('generateButton').addEventListener('click', function() {
    let numbers = generateLottoNumbers();
    document.getElementById('numbers').textContent = numbers.join(', ');
});


function generateLottoNumbers() {
    let lottoNumbers = [];
    for (let i = 0; lottoNumbers.length < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 45) + 1; //Math.random() 메서드의 의미 " 0 >= x && x < 1 "
        if (!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber);
        }
    }
    return lottoNumbers;
}
console.log(generateLottoNumbers());