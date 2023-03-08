function countStringOccurrences(text, word){

let words = text.split(' ')
let counter = 0;

for(const list of words){
    let match = list == word;
    if(match){
        counter++;
    }
}
console.log(counter)


}
countStringOccurrences('This is a word and it also is a sentence','is')