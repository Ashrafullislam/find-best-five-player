
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
   
//    disable button onclick 
function buttonDisabledById(btnId,selectPlayer,elementName){
  if(selectPlayer === elementName ){
      document.getElementById(btnId).disabled = true;
      return true;
     }
     else{
      document.getElementById(btnId).disabled = false;
      return false;
     }       
}

 //  calculata The total player budget and update the player Expenses 
 function calculatePlayerBudget(){
  // get the totalChildElement number by parernt Id
  let totalChildElement = document.getElementById('player-list-ul').childElementCount;

  // get the inputValue of perPlayerAmount 
  let  perPlayerAmount = document.getElementById('per-player-amount');
  let  perPlayerAmountString = perPlayerAmount.value ;
  let  perPlayerNewAmountNumber =  parseInt(perPlayerAmountString);
   if( perPlayerAmountString === ''){
    alert('Please enter per player amount in numbers');
   }
   else{
    
      // calculate the total player amouont 
  let totalPlayerAmount = totalChildElement * perPlayerNewAmountNumber;
      
  // find the playerExpenses and update the amount 
  const playerExpensesField = document.getElementById('player-expenses');
  const playerExpensesString = playerExpensesField.innerText;
   
  // update the expenses amount  
  playerExpensesField.innerText = totalPlayerAmount;
  return totalPlayerAmount;
   }

}

//  Calculate Total budget  
function calclulateTotalBudget(totalPlayerAmount){
  // get the manager inputField 
   

  const  managerInputValue = document.getElementById('manager-amount');
  const managerInputValueString = managerInputValue.value;
  const managerNewAmount = parseInt(managerInputValueString);  
  // get the coach inputFeild value 
  const coachInputValue = document.getElementById('coach-amount');
  const coachInputValueString = coachInputValue.value;
  const coachNewAmount = parseInt(coachInputValueString);  

  if( managerInputValueString === ''){
    alert('Please enter amount numbers of manager box ');
  }
  else if  (coachInputValueString === ''){
    alert( 'Please enter amount numbers of coach box ');
  }
  else{
 
    // get the tolat field and update total amount  
    let previousTotalField = document.getElementById('total-amount');
    let previousTotalFieldValue = previousTotalField.innerText; 

    // playerAmount , managerNewAmount , coachNewAmount sum and update total 
    let totalCalculateBudget = totalPlayerAmount + managerNewAmount + coachNewAmount 
    // set the total value 
    previousTotalField.innerText = totalCalculateBudget  
  }
 

}
