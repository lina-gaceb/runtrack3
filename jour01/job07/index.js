unction jourtravaille(year,month,day){

    let date = new Date(year,month,day);
if( (date.getDate() == 18 && date.getMonth() == 3 && date.getFullYear() == 2022) || (date.getDate() == 01 && date.getMonth() == 4 && date.getFullYear() == 2022) || (date.getDate() == 7 && date.getMonth() == 4 && date.getFullYear() == 2022) || (date.getDate() == 26 && date.getMonth() == 4 && date.getFullYear() == 2022) || (date.getDate() == 06 && date.getMonth() == 5 && date.getFullYear() == 2022) || (date.getDate() == 08 && date.getMonth() == 4 && date.getFullYear() == 2022) || (date.getDate() == 26 && date.getMonth() == 4 && date.getFullYear() == 2022) || (date.getDate() == 14 && date.getMonth() == 6 && date.getFullYear() == 2022) || (date.getDate() == 08 && date.getMonth() == 4 && date.getFullYear() == 2022) || (date.getDate() == 26 && date.getMonth() == 05 && date.getFullYear() == 2022) || (date.getDate() == 15 && date.getMonth() == 08 && date.getFullYear() == 2022) || (date.getDate() == 01 && date.getMonth() == 11 && date.getFullYear() == 2022) || (date.getDate() == 11 && date.getMonth() == 11 && date.getFullYear() == 2022) || (date.getDate() == 25 && date.getMonth() == 12 && date.getFullYear() == 2022)){
    console.log( "Le "+ date.getDate() + " " + date.getMonth()+ " " + date.getFullYear() + " " + "est un jour férié" );
}
else if (date.getDay()== 0 || date.getDay()== 6 ){
    console.log("Le "+ date.getDate() + " " + date.getMonth()+ " " + date.getFullYear() + " "   + "est un week-end");
}

else {console.log("Le "+ date.getDate() + " " + date.getMonth()+ " " + date.getFullYear() + " " + "est un jour de travail ");}

}

jourtravaille(2022,1,12);