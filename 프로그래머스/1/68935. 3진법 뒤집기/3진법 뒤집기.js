function solution(n) {
    var answer = 0;
    var n3 = [... n.toString(3)];
    var n3rev = n3.reverse().join("");
    return answer = parseInt(n3rev, 3);
}