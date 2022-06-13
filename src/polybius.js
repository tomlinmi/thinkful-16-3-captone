// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //create objects with keys to encode and decode
const encoder ={'A':"11",'B':"21", 'C':"31",'D':"41",'E':"51",'F':"12",'G':"22",'H':"32","I/J":"42",'I':"42",'J':"42", 'K':"52",'L':"13",'M':"23",'N':"33",'O':"43",'P':"53",'Q':"14",'R':"24",'S':"34",'T':"44", 'U':"54", 'V':"15",'W':"25",'X':"35",'Y':"45",'Z':"55"}
                
const decoder ={"11":'A',"21":'B',"31":'C',"41":'D',"51":'E',"12":'F',"22":'G',"32":'H', "42":'I/J',"52":'K',"13":"L","23":'M',"33":'N',"43":'O',"53":'P',"14":'Q',"24":'R',"34":'S',"44":'T', "54":'U', "15":'V',"25":'W',"35":'X',"45":'Y',"55":'Z'}
 
function polybius(input, encode = true) {
// your solution code here
   let result = ""
       
   //decoding  
    if (encode=== false){
//check for odd length input in decode string, if the length divided by 2 remainder is 1, return false
  let length = 0; 
      for(let i=0;i<input.length;i++) { 
        if(input[i]!==' ') length+=1; } 
      if(length%2===1) return false; 
 //create decoder pairs to check, account for space between input strings   
     for(let i=0;i<input.length;) { 
       if(input[i]===' ') { 
         result+=' '; i+=1; 
       }else{ let pair = input[i]+input[i+1]; 
             result+=decoder[pair]; i+=2; } 
       result = result.toLowerCase(); }
    
    //encoding
      
     }else{ input = input.toUpperCase(); 
             for(let i=0;i<input.length;i++) { 
               if(input[i]===' ') result+=' '; else result+=encoder[input[i]]; } 
    
    }
    return result;
    
  }
 return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
