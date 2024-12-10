function solution(num) {
    var answer = 0;
    var arr = [0,1,2,3,4,5,6,7,8,9]
    var newarr = arr.filter(item=> !num.includes(item))
    newarr.map(item => answer += item)
    return  answer
    

}