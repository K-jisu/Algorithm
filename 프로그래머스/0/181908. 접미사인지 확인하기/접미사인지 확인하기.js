function solution(my_string, is_suffix) {
    const array = [...my_string].reverse().join("")
    const suffix = [...is_suffix].reverse().join("")
    if(!my_string.includes(is_suffix)){
        return 0
    }else{
        return array.slice(0, is_suffix.length).includes(suffix) ? 1 : 0
    }
}