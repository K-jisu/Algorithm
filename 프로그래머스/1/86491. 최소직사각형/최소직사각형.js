function solution(sizes) {
    var answer = 0;
    var max0 = 0;
    var max1 = 0;

    //모든 배열을 오름차순으로 한 후
    for(i=0; i<sizes.length; i++){
        sizes[i].sort((a, b) => a-b);
        //그 중 가장 큰 수들만 뽑아서 리턴
        max0 < sizes[i][0] ? max0 = sizes[i][0] : max0;
        max1 < sizes[i][1] ? max1 = sizes[i][1] : max1;
    }
    
    return max0 * max1;
}