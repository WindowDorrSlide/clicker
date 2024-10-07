
const written = document.getElementById('typing-test-written');
const towrite = document.getElementById('typing-test-towrite');

var fetchedText = "";
window.onload = function() {
    towrite.textContent = generateLoremText(50);
    console.log(towrite);
}

document.addEventListener('keydown',
    (e) => {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
        }

        const pressed = e.key
        const nextKey = towrite.textContent.charAt(0);
        console.debug("pressed", pressed, "nextKey", nextKey, "equal", pressed !== nextKey);
        if (pressed != nextKey) {
            return;
        }
        written.textContent += pressed;
        towrite.textContent = towrite.innerHTML.substring(1);
        moneyPerClick += 1;

        money += moneyPerClick;
        numberOfClicks += 1;

        // if to much text on page start "scrolling"
        const lengthWritten = written.textContent.length;
        if (lengthWritten > 31) {
            // fetch more text if needed
            if (fetchedText.length <= 0) {
                fetchedText += generateLoremText(100);
            }

            written.textContent = written.textContent.substring(1);
            towrite.textContent += fetchedText.charAt(0);
            fetchedText = fetchedText.substring(1);
        }
    },
    false
);

function generateLoremText(numWords) {
    let loremText = '';
    var words = [
        'Lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet',
        'consectetur',
        'adipiscing',
        'elit',
        'sed',
        'do',
        'eiusmod',
        'tempor',
        'incididunt',
        'ut',
        'labore',
        'et',
        'dolore',
        'magna',
        'aliqua',
        'Ut',
        'enim',
        'ad',
        'minim',
        'veniam',
        'quis',
        'nostrud',
        'exercitation',
        'ullamco',
        'laboris',
        'nisi',
        'ut',
        'aliquip',
        'ex',
        'ea',
        'commodo',
        'consequat',
        'Duis',
        'aute',
        'irure',
        'dolor',
        'in',
        'reprehenderit',
        'in',
        'voluptate',
        'velit',
        'esse',
        'cillum',
        'dolore',
        'eu',
        'fugiat',
        'nulla',
        'pariatur',
        'Excepteur',
        'sint',
        'occaecat',
        'cupidatat',
        'non',
        'proident',
        'sunt',
        'in',
        'culpa',
        'qui',
        'officia',
        'deserunt',
        'mollit',
        'anim',
        'id',
        'est',
        'laborum',
    ];

    for (let j = 0; j < numWords; j++) {
        let randomWord = words[Math.floor(Math.random() * words.length)];
        loremText += randomWord + ' ';
    }
    return loremText;
}
