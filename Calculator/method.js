// function past(x) {
    
    
//     document.addEventListener("click",() => {
     
//     y = document.getElementById("affich").innerHTML.length - 22;
//     if (y <= 10) {
        
//     let element = document.getElementById(x).innerText;       
//     document.getElementById("affich").innerHTML += element;
//     console.log(element);
//   }
// });
  
  
  
  
// }



// enlève 1 caractère
function supprimer() {   
  item =  document.getElementById("affich");
  item.innerHTML = item.innerHTML.slice(0, -1); 
   if (item.innerText.length == 0 ){
    item.innerHTML = 0;
   }
}

// vide tout
function vider(item) {
    item =  document.getElementById("affich");
    item.innerHTML = 0; 
}

// ajourt number
function past(x) {
  let affich = document.getElementById("affich");
  let element = document.getElementById(x).innerText;  
  if (affich.innerText.length  < 15) {
    if ( (affich.innerText.length == 1 ) 
        && (affich.innerText == 0) 
        && (element != '%')
        && (element != '/')
        && (element != '*')
        && (element != '-')
        && (element != '+')
        && (element != ',')
    ){      
        affich.innerHTML = element;              
    }else{        
        affich.innerHTML += element;
    }
    }
}

console.log(affich.innerText.includes('%'));


// vide tout
function vider(item) {
    item =  document.getElementById("affich");
    item.innerHTML = 0; 
}

//porcentage
function pourCentage(){
    item =  document.getElementById("affich");
    va11 = item.innerText;
    item.innerHTML += '%';
    val2 = item.split('%')[1];
    item.innerHTML = ( +val1  / +val2)*100;
}

function egal(){
    let operation = ['/','*','-','+','%'];
    for (let i=0;i<operation.length;i++){
        let affich = document.getElementById("affich");
        if (affich.innerText.includes(operation[i])){
            opr = operation[i];
            console.log(opr);
            pos = affich.innerText.indexOf(opr);
            console.log(pos);
            num1 = affich.innerText.slice(0,pos);
            console.log(num1);
            num2 = affich.innerText.slice(pos+1);
            console.log(num2);
            switch (opr) {
                case '/':
                    affich.innerHTML = parseInt(num1)  / parseInt(num2);
                    break;
                case '*':
                    affich.innerHTML = parseInt(num1) * parseInt(num2);
                    break;
                case '-':
                    affich.innerHTML = parseInt(num1) - parseInt(num2);
                    break;
                case '+':
                    affich.innerHTML = parseInt(num1) + parseInt(num2);
                    break;
                case '%':
                    affich.innerHTML = (parseInt(num1)* parseInt(num2))/100;
                    break;       
                }
            }
        }
    }
