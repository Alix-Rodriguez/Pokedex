

(function(){
    const hambur = document.querySelector('.hambur');
    const menu = document.querySelector('.navegacion'); 
    const X = document.querySelector('.x')
    const lis = document.querySelectorAll('.enlace');
    const header = document.querySelector('.header');
       
    // POO
    const main = {
        desplegar: function(){
               menu.classList.remove('menu_y'); 
               menu.classList.remove('nav_menu')
               X.style.display = 'none';
               hambur.style.display='flex';
           
            }
        }
        
        // funcion de desplegar el menu
        
        let veri = false; 
        
        hambur.addEventListener('click', ()=> {
         if(veri===true){
            menu.classList.remove('y_0');
            menu.classList.toggle('menu_y');
            veri=false;
         }else{
             menu.classList.toggle('nav_menu');
         }   
        
         lis.forEach(element => {
            element.style.opacity='1';
         });

        menu.style.visibility='visible';  
         hambur.style.display='none';
         X.style.display = 'flex';

         X.addEventListener('click',()=> {
         main.desplegar();
         
        });


        lis.forEach(element => {
           element.addEventListener('click', ()=>{
            menu.classList.toggle('y_0');
            main.desplegar();
            veri = true;
        });
        });
        
    });
   

    // APARECE Y DESAPARECE BOTON
    const volver = document.querySelector('.volver img');   
    let bool = false;
    let bool2=false;
    lis.forEach(element => {
        element.addEventListener('click', ()=>{
         header.classList.add('traslada');
        bool2=true;
     });
     });

   window.addEventListener('scroll', ()=>{
    if(bool===false){
        volver.classList.add('aparece');
   }
   
   if(window.scrollY===0){
       bool=false;
       volver.classList.remove('aparece');
   }
   
   if(bool2===false){
     header.classList.remove('traslada');
   }
   bool2=false;
 });

   volver.addEventListener('click', ()=>{
       volver.classList.remove('aparece');
       bool=true;
   });


    let contador=0;
    let yes=0;
    window.addEventListener('resize',()=> {
        if(window.innerWidth <= 800 ){
            if(contador === 0){
               
                menu.style.visibility='hidden';  
                lis.forEach(element => {
                    element.style.opacity='0';
                 });
                contador++;
                
            }
            hambur.style.display='flex';  

            if(yes === 1){
                hambur.style.display='flex';  
                yes=0;
             }
            
            
            if(X.style.display === 'flex'){
                X.style.display = 'none';
               menu.classList.remove('nav_menu'); 
                yes=1;
            }

        }else{
            lis.forEach(element => {
                element.style.opacity='1';
             });
            menu.style.visibility='visible';  
            hambur.style.display='none';  
            X.style.display='none';  
            contador=0;
            yes=0;
        }
    })   
    
    // EFECTO SCROLLREVEAL
    ScrollReveal().reveal('.central' , {deley:500});
    ScrollReveal().reveal('.header' , {deley:500});
    ScrollReveal().reveal('.horarios' , {deley:500});
    ScrollReveal().reveal('.productos' , {deley:500});
    ScrollReveal().reveal('.mapa' , {deley:500});
    ScrollReveal().reveal('.footer' , {deley:500});
})();













