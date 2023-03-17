function revealWords(replacer, textToReplace){


replacer = replacer.split(', ');
replacer.map(word => {
    let currentWord = '*'.repeat(word.length);
    textToReplace = textToReplace.replace(currentWord, word);
})

console.log(textToReplace)




}
revealWords('great, learning','softuni is ***** place for ******** new programming languages');