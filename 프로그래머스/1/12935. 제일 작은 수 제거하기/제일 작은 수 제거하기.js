function solution(arr) {
    var answer = [];
    var min = Math.min(...arr)
    var filtered = arr.filter(item => item !== min)
    if(filtered.length === 0){
        return [-1];
    }
    return filtered;

}