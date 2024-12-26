function solution(s) {
    var answer = '';
    var arr = s.split(" ");
    var arrans = []
    
    for(var i=0; i< arr.length; i++){
        // console.log(arr[i].length)
        for(var j=0; j<arr[i].length; j++){
            if(j%2 === 0){
                arrans.push(arr[i][j].toUpperCase())
            }else{
                arrans.push(arr[i][j].toLowerCase())
            }

        }
            arrans.push(" ")
    }
    arrans.pop();
    return answer = arrans.join("");
}