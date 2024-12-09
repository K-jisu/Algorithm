function solution(s){
    var arr = s.split("")
    var cnt = 0;
    if(arr[0] === ")" || arr[arr.length-1] === "("){
        return false;
    }
    for(i=0; i < arr.length; i++){
        if(arr[i] === "("){
        cnt++
    }else if(arr[i] === ")"){
        cnt--
        if(cnt < 0) return false;
    }
    }
    return cnt === 0 ? true : false; 
}

        
