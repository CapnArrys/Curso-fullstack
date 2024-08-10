import React from 'react'

const Exercicio3_2 = () => {
   /* Vamos codar 3_2 TERMINAR EM CASA */
   const isPrimary = true;
   const isLarge = true;
   var estilo = {}
 
   if (isPrimary == true & isLarge == true) {
     estilo = {
       color: "#0000ff",
       backgroundColor: '#ffc0cb',
       width: "300px",
       padding: "15px"
     }
 
   } else if (isPrimary == true & isLarge == false){
     estilo = {
       color: "#000000",
       backgroundColor: '#ffffff',
       width: "250px",
       padding: "5px"
 
     }} else if (isPrimary == false & isLarge == true) {
       estilo = {
         color: "#000000",
         backgroundColor: '#ffffff',
         width: "250px",
         padding: "5px"
 
     }} else if (isPrimary == false & isLarge == false) {
       estilo = {
         color: "#000000",
         backgroundColor: '#ffffff',
         width: "250px",
         padding: "5px"
 
     } 
 
   }
   return (
     <div style={estilo}>
       Texto com estilo inline dinâmico
       
     </div>
   )
}

export default Exercicio3_2