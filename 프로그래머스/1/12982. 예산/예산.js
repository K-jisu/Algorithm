function solution(d, budget) {
    const arr = d.sort((a, b)=>a-b)
    let answer =0;
    let arr1 = [];
    for(i=0; i< arr.length; i++){
        answer += arr[i]
        arr1.push(i)
        if(answer > budget){
            return i
        }
    }
    console.log(arr1)
    return arr.length
}