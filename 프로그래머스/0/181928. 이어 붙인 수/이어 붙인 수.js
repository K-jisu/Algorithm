function solution(num_list) {
    let even = "";
    let odd = "";
    num_list.map((i)=>{
        i % 2 === 0  ? even += i+("") : odd += i+("")
    })
    console.log(even ,  odd)
    return +even + +odd
}