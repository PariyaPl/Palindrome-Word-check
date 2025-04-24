const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const p = document.querySelector("#result");

checkBtn.onclick = palindromeCheck;

function palindromeCheck() {
    const Word = textInput.value.toLowerCase().replace(/[\,\s\_\.\-]/g,'').replace(/\\/g, '/').replace(/\(/g, ')');
    if(Word) {
        const WordInv = Word.split('').reverse().join('');
        if(Word === WordInv) {
            p.innerText = `${textInput.value} is a palindrome`;
        }
        else {
            p.innerText = `${textInput.value} is not a palindrome`;
        }
    }
    else{
        alert("Please input a value");
    }
}
