function isprime(nb){
    
    for(let i= 2 ; i<nb; i++){
        if(nb%i == 0){
            return false;
        }
    }
    return true;
}


function sommenombrespremiers(nb1, nb2){

    if(isprime(nb1) && isprime(nb2)){
        console.log(nb1 + nb2) ;
    }
    else {console.log(false);}
}

sommenombrespremiers(1,4);
