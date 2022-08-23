
   
// find button by id and add EventListener 
// player 1 
document.getElementById('btn-md-salah').addEventListener('click',function(){
   const selectPlayer = selectPlayerByIdOnclic('player-list-ul',"Md.Salah");
   
   // call the function to disbled button whice is selected 
   const buttonDisble = buttonDisabledById('btn-md-salah',selectPlayer,"Md.Salah" )
    
   })


// player-2 btn 

document.getElementById('btn-messi').addEventListener('click',function(){
    // call the function to set element of Ul list 
    const selectPlayer = selectPlayerByIdOnclic('player-list-ul',"Lionel Messi" );
    
    // call the function to disbled button whice is selected 
    const buttonDisble = buttonDisabledById('btn-messi',selectPlayer,"Lionel Messi" )
    
   })


 //  player 3 btn click 
  document.getElementById('btn-ronaldo').addEventListener('click',function(){
     // call the function to set element of Ul list 
    const selectPlayer = selectPlayerByIdOnclic('player-list-ul',"Ronaldo");
     // call the function to disbled button whice is selected 
    const buttonDisble = buttonDisabledById('btn-ronaldo',selectPlayer,"Ronaldo")
    
 })

  //  player 4 btn click 
  document.getElementById('btn-dimaria').addEventListener('click',function(){

    const selectPlayer = selectPlayerByIdOnclic('player-list-ul',"Dimaria" );
   
       // call the function to disbled button whice is selected 
       const buttonDisble = buttonDisabledById('btn-dimaria',selectPlayer,"Dimaria" )
    
      
 })

  //  player 5 btn click 
  document.getElementById('btn-javir-jental').addEventListener('click',function(){
    const selectPlayer = selectPlayerByIdOnclic('player-list-ul',"Javir Jental" );
   
    // call the function to disbled button whice is selected 
    const buttonDisble = buttonDisabledById('btn-javir-jental',selectPlayer,"Javir Jental")
    

 })

  //  player 6 btn click 
  document.getElementById('btn-juaquin ').addEventListener('click',function(){
   
    const selectPlayer = selectPlayerByIdOnclic( 'player-list-ul', "Juaquin Correa");

    // call the function to disbled button whice is selected 
    const buttonDisble = buttonDisabledById('btn-juaquin ',selectPlayer,"Juaquin Correa");
    
 })

   //  player 7 btn click 
  document.getElementById('btn-parades').addEventListener('click',function(){

    const selectPlayer = selectPlayerByIdOnclic('player-list-ul',"Parades" );

    // call the function to disbled button whice is selected 
    const buttonDisble = buttonDisabledById('btn-parades',selectPlayer,"Parades" )
      
 })

  //  player 8 btn click 
  document.getElementById('btn-neimar').addEventListener('click',function(){

    const selectPlayer = selectPlayerByIdOnclic('player-list-ul',"Neimar" );

    // call the function to disbled button whice is selected 
    const buttonDisble = buttonDisabledById('btn-neimar',selectPlayer,"Neimar" )

      
 })

   //  player 9 btn click 
   document.getElementById('btn-robert').addEventListener('click',function(){
     
    const selectPlayer = selectPlayerByIdOnclic('player-list-ul',"Rovert " );

    // call the function to disbled button whice is selected 
    const buttonDisble = buttonDisabledById('btn-robert',selectPlayer,"Rovert " )

        
 })


//  calculte button add Event 
document.getElementById('calclulate').addEventListener('click',function(){
   
       calculatePlayerBudget();
   
   
})

// totalCalculate button add Event 
document.getElementById('calclulate-total').addEventListener('click',function(){

    const   totalPlayerAmount =  calculatePlayerBudget();
    calclulateTotalBudget(totalPlayerAmount);

})
