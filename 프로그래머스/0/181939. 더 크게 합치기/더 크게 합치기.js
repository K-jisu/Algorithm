function solution(a, b) {
    const sol1 = a.toString() + b.toString()
    const sol2 = b.toString() + a.toString()
    if(sol1 > sol2){
        return +sol1
    }else{
        return +sol2
    }
}