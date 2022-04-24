
function tri(numbers,order){

    if(order == "desc"){
    
        for(let i =-1 ; i<numbers.length; i++){
            for(let y=0; y<numbers.length; y++){
                if(numbers[y] < numbers[i]){
                    let a=numbers[i];
                    numbers[i]=numbers[y];
                    numbers[y] = a;
                }
            }
        }
        console.log(numbers);
    }
    else if (order == "asc"){
        for(let i =-1 ; i<numbers.length; i++){
            for(let y=0; y<numbers.length; y++){
                if(numbers[y] > numbers[i]){
                    let a=numbers[i];
                    numbers[i]=numbers[y];
                    numbers[y] = a;
                }
            }
        }
        console.log(numbers);
    
    }
    }
    
    var numbers=[1,4,3,5,6,10,7];
    
    tri(numbers,"asc");