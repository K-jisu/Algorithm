function solution(num_list) {
    var answer = 0;
    const multi = num_list.reduce((acc, cur)=>acc * cur)
    const add = num_list.reduce((acc, cur)=>acc + cur)
    if(multi < Math.pow(add, 2)){
        return 1
    }else{
        return 0
    }
    
}