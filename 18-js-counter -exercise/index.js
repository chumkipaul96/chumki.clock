document.querySelector('#sp1').innerText = '00:00:00'
let seconds = 0 
let minuts = 0 
let hours = 0 

setInterval(()=> {
    document.querySelector('#sp1').innerText = formater(hours,minuts,seconds)
    seconds++
    if (seconds==60) {
        seconds = 0
        minuts++
        if (minuts == 60){
            minuts = 0
            hours++
            if(hours == 24){
                hours = 0
            }
        }
        
    }
},100)

function formater (hrs, mins,scs){
    let result = ''
    if (hrs < 10){  // here we put <10 becdoz we need 0 furst number
        result = result +  '0'+ hrs.toString()
    } else{
        result = result +  hrs.toString()

    }
    if (mins < 10){  
        result = result +  ':0'+ mins.toString()
    } else{
        result = result + ':' + mins.toString()

    }
    if (scs < 10){  
        result = result +  ':0'+ scs.toString()
    } else{
        result = result +  ':'+ scs.toString()
        

}
    return result.toString()
}
