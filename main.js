const number = document.body.children[0].children[2];
const pantalla = document.querySelector('.pantalla');
let mostrar=" "
let num=' '
let ctdor=0;

number.children[0].addEventListener('click', ()=>{
     num = '7'
    mostrar = mostrar+num;
    pantalla.innerHTML=mostrar;
    ctdor++;
});


number.children[1].addEventListener('click', ()=>{
    num = '8';
    mostrar = mostrar+num;
    pantalla.innerHTML=mostrar;
    ctdor++;
});


number.children[2].addEventListener('click', ()=>{
    num = '9';
    mostrar = mostrar+num;
    pantalla.innerHTML=mostrar;
    ctdor++;
});

number.children[3].addEventListener('click', ()=>{
    let respaldo=" ";
   
    
     for(let i=0;i<=ctdor;i++){
        
        if(i===ctdor-1){
           
            
         
            for(let j=0;j<ctdor;j++){
               
                respaldo =respaldo+mostrar[j];
                
             }
        }
     }
     ctdor=(respaldo.length)-1;
     mostrar = respaldo;
     respaldo= " ";
     pantalla.innerHTML=mostrar;
});

number.children[4].addEventListener('click', ()=>{
     num = '4';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });

 number.children[5].addEventListener('click', ()=>{
     num = '5';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });

 number.children[6].addEventListener('click', ()=>{
     num = '6';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });

 number.children[7].addEventListener('click', ()=>{
     num = '+';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });

 number.children[8].addEventListener('click', ()=>{
     num = '1';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });
 number.children[9].addEventListener('click', ()=>{
     num = '2';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });
 number.children[10].addEventListener('click', ()=>{
     num = '3';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });

 number.children[11].addEventListener('click', ()=>{
     num = '-';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });

 number.children[12].addEventListener('click', ()=>{
     num = '.';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });

 number.children[13].addEventListener('click', ()=>{
     num = '0';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });

 number.children[14].addEventListener('click', ()=>{
     num = '/';
     mostrar = mostrar+num;
     pantalla.innerHTML=mostrar;
     ctdor++;
 });

 number.children[15].addEventListener('click', ()=>{
    num= 'x';
    mostrar = mostrar+num;
    pantalla.innerHTML=mostrar;
    ctdor++;
 });

 number.children[16].addEventListener('click', ()=>{
    mostrar= "  ";
    pantalla.innerHTML=mostrar;
    ctdor=0;
 });

 number.children[17].addEventListener('click', ()=>{
     let cad1 =" ";
     let cad2 =" "
    let n1 = 0;
    let n2 = 0;
    let bool=false;
    let operador=' ';
    let respaldo=0;
    let block=0;
    for(let i=0;i<=ctdor;i++){
        if(mostrar[i] === '+' || mostrar[i] === '/' || mostrar[i] === 'x' || mostrar[i] === '-'){
            operador=mostrar[i];
            bool=true;
            block++;
            i++;
        }
        if(bool===false){
            cad1=cad1+mostrar[i];
        }
        if(bool===true){
            cad2=cad2+mostrar[i];
          
        }
    }

    n1=parseFloat(cad1);
    n2=parseFloat(cad2);

    
    if(operador==='+'){
        respaldo=n1+n2;
    }

    if(operador==='-'){
    
        respaldo=n1-n2;
     
        
    }
    if(operador==='/'){
        respaldo=n1/n2;
        
    }

    if(operador==='x'){
        respaldo=n1*n2;
    }
    
    
    mostrar=respaldo.toString();
 
    
    ctdor=(mostrar.length)-1;
    if(block===1){
        pantalla.innerHTML=mostrar;
    }else{
     pantalla.classList.add('min');
     pantalla.innerHTML="ERROR, SOLO SE PERMITE UNA OPERACIÓN";
    setTimeout(function (){
        pantalla.classList.remove('min');
        mostrar=" ";
        pantalla.innerHTML=mostrar;
    },2000);   
    }
    
    
});


/* CAMBIO DE TEMA */

let circle = document.querySelectorAll('.circle_item_li');
let color= document.querySelector('.color');
let body = document.querySelector('body')

circle.forEach(element => {
    element.addEventListener("click",()=>{
        for(let i=0;i<3;i++){
            circle[i].classList.remove('color');
        }
       element.classList.toggle('color');
     //  console.dir(element);
        
         if(circle[0].className=== "circle_item_li color"){
             body.classList.remove('tema2');
             body.classList.remove('tema3');
         }
         if(circle[1].className=== "circle_item_li color"){
              body.classList.add('tema2');
              console.log("entrooo");
             body.classList.remove('tema3');

         }
         if(circle[2].className=== "circle_item_li color"){
            body.classList.add('tema3');
            
         }



    });
});



