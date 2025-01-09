/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = 'a'
    const generateWord = ()=>{
        if(word.length >= k){
            return;
        }

        let wordArr = word.split('');
        wordArr.forEach((char, i)=>{
          wordArr.push(String.fromCharCode(word.charCodeAt(i)+1));
        })

        word = wordArr.join('');

        generateWord(); 
    }

    generateWord();
    return word[k-1];
};