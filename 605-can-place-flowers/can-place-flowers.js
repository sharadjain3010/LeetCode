/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    let flowerCount = 0;
    while(i < flowerbed.length){
        if(flowerbed[i] === 0){
            if((flowerbed[i-1] === 0 || flowerbed[i-1] === undefined)
            && (flowerbed[i+1] === 0 || flowerbed[i+1] === undefined)){
                flowerCount++;
                flowerbed[i] = 1;
            }
        }
        i++;
    }
    if(n <= flowerCount){
        return true;
    }
    return false;
};