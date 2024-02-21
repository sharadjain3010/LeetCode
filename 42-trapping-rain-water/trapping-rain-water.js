/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const maxLeftForEachElement = [0];
    let maxLeft = 0;
    const maxRightForEachElement = [0];
    let maxRight = 0;
    let maxWater=0;
    for(let i=1; i<height.length; i++){ 
       maxLeft = Math.max(height[i-1], maxLeft);
       maxLeftForEachElement.push(maxLeft);
    }

    for(let i=height.length-1; i>0; i--){ 
       maxRight = Math.max(height[i], maxRight);
       maxRightForEachElement.unshift(maxRight);
    }

    for(let i=0; i<height.length; i++){ 
        const trapWater = Math.min(maxLeftForEachElement[i], maxRightForEachElement[i]) - height[i] > 0 ? Math.min(maxLeftForEachElement[i], maxRightForEachElement[i]) - height[i] : 0;
        maxWater = maxWater + trapWater;
    }
    return maxWater;
};