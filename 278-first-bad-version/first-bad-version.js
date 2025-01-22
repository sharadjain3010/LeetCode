/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    let badVersion;
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let i=0;
        let j=n;
        while(i<=j){
            const m = Math.floor((i+j)/2);
            if(isBadVersion(m)){
                badVersion = m;
                j=m-1;
            }else{
                i=m+1;
            }

        }
        return badVersion;
    };
};