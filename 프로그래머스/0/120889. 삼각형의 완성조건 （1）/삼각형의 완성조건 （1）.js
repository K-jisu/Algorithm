function solution(sides) {
    const array = sides.sort((a, b)=>b-a)
    if(array[0] < array[1] + array[2]){
        return 1
    }else{
        return 2
    }
}