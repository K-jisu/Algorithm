function solution(my_string, letter) {
    var arr = [...my_string];
    var filtered = arr.filter((x) => x != letter).join("");
    return filtered;
        
}