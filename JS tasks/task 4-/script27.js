

try {
    let h=parseInt(prompt("enter the height between 5 and 10"))
    
    if(isNaN(h)) throw ("notANumberError"); 
    if(h>5&&h<10){
        
        console.log(h)
    }
    if(h<5) throw "Tiny Height Error ";
     
    if(h>10) throw "Huge Height Error";


} catch (error) {

    console.log("error :" + error)
    
}

