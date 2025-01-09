/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = 'a'
    // // Soultion 1 using recurssion
    // const generateWord = ()=>{
    //     if(word.length >= k){
    //         return;
    //     }

    //     let wordArr = word.split('');
    //     wordArr.forEach((char, i)=>{
    //       wordArr.push(String.fromCharCode(word.charCodeAt(i)+1));
    //     })

    //     word = wordArr.join('');

    //     generateWord(); 
    // }

    // generateWord();
    // return word[k-1];

    // // Soultion 2 using loop

    while(word.length < k){
        let wordArr = word.split('');
        wordArr.forEach((char, i)=>{
          wordArr.push(String.fromCharCode(word.charCodeAt(i)+1));
        })

        word = wordArr.join('');
    }
    return word[k-1];
};