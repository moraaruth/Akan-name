
function getAkanName () {

    let dayOfBirth = Number(document.getElementById("day").value);
    
    let monthOfBirth = Number(document.getElementById("month").value);

    let yearOfBirth = document.getElementById("year").value;
    
    let genders = document.getElementsByName("gender");
  
   
    function getGender () {
      for (let gender of genders){
        if (gender.checked){
          return gender.value;
        }
      }
    }
  
    let myGender = getGender();
    console.log(myGender);
  
    function monthValidator () {
        if (monthOfBirth < 1 || monthOfBirth > 12) {
          return false;
        } else {
          return true;
        }
      }
    
      function dayValidator () {
        if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
          if (dayOfBirth > 28 || dayOfBirth < 1) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth > 29) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth < 1) {
            return false;
          } else {
            return true;
          }
        } else if (dayOfBirth < 1 || dayOfBirth > 31){
          return false;
        } else {
          return true;
        }
      }
    
     
      let monthValid = monthValidator();
      let dayValid = dayValidator();
  
    