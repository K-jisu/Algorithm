function solution(name, yearning, photo) {
    var answer = [];
    const filteredPhoto = photo.map((items)=> items.filter(item => name.includes(item)));
    
    return filteredPhoto.map((items)=>{
        let num =0;
     let data = items.map((item) => yearning[name.indexOf(item)])   
     for(let i = 0; i< data.length; i++){
        num += +data[i]
       
     }
        return num
    }
                      )
    
    
}
