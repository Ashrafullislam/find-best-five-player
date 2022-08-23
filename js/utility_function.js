
// select plyer onlcik  and call the function inside the eventhandler

  function selectPlayerByIdOnclic( ParentId, elementName){

    //    total element child count by parent Id 
      const totalElementNumber = document.getElementById('player-list-ul').childElementCount;
      if(totalElementNumber > 4){
       alert('You have already select  5 players.You will be not able to select more then 5 players ')
       return false;
      }  
      else{  
       let createPlayerList = document.createElement('li');
       createPlayerList.innerHTML = elementName ;
       document.getElementById(ParentId).appendChild(createPlayerList);
       return createPlayerList.innerHTML;
       
      }
   }
   

