function solution(s){
    var answer = true;
    var pcnt = 0;
    var ycnt = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]==="p" || s[i]==="P"){
            pcnt++;
        }else if(s[i] === "y" || s[i] === "Y"){
            ycnt++;
        }
    }
    if(pcnt === ycnt){
        return true;
    }else{
        return false;
    }
        

}