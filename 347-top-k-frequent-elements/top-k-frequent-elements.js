/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {};
    for(let i=0; i<nums.length; i++){
        hash[nums[i]] ? hash[nums[i]] = hash[nums[i]]+1 : hash[nums[i]] = 1;
    }
    let res = []
    Object.keys(hash).forEach((el)=>{
        res.push([el, hash[el]]);
    });
    return res.sort((a,b)=>a[1]-b[1]).map((el)=>el[0]).slice(-k)
};