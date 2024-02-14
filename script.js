window.onload = function() {
    encrypt();
}

function encrypt() {
    const inputText = getInputText();
    const encryptedText = encryptText(inputText);
    updateResult("Texto Criptografado:", encryptedText);
    clearInputText();
}

function decrypt() {
    const inputText = getInputText();
    const decryptedText = decryptText(inputText);
    updateResult("Texto Descriptografado:", decryptedText);
    clearInputText();
}

function getInputText() {
    return document.querySelector('.decoder__encryptor__textarea').value.toLowerCase();
}

function updateResult(title, text) {
    const resultTitle = document.querySelector('.decoder__result__info__title');
    const resultText = document.querySelector('.decoder__result__info__text');
    const resultImg = document.querySelector('.decoder__result__img');
    const resultInfo = document.querySelector('.decoder__result_info');
    const copyButton = document.getElementById('copy-button');

    if (text === "") {
        resultTitle.textContent = "Nenhuma mensagem encontrada.";
        resultText.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        resultInfo.style.display = "block";
        copyButton.style.display = "none";
        
        if (window.innerWidth <= 1100) {
            resultImg.classList.add('hidden');
        } else {
            resultImg.classList.remove('hidden');
        }
        
    } else {
        resultTitle.textContent = title;
        resultText.textContent = text;
        resultTitle.style.textAlign = 'left';
        resultText.style.textAlign = 'left';
        resultImg.classList.add('hidden');
        resultInfo.style.display = "block";
        copyButton.style.display = "block";
    }
}

function clearInputText() {
    document.querySelector('.decoder__encryptor__textarea').value = "";
}

function copyToClipboard() {
    const textToCopy = document.querySelector('.decoder__result__info__text').textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert("Texto copiado para a área de transferência!");
    }).catch(function(err) {
        console.error('Erro ao copiar o texto: ', err);
    });
}

function encryptText(text) {
    return text.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

document.addEventListener('DOMContentLoaded', function() {
    var menuCheckbox = document.getElementById('responsive-menu');
    var logoImg = document.querySelector('.header__logo__img');

    menuCheckbox.addEventListener('change', function() {
        if (this.checked) {
            logoImg.src = './assets/img/logo-alura2.svg';
        } else {
            logoImg.src = './assets/img/logo-alura1.svg';
        }
    });
    
});


