function getAkanName(){
    let dateOfBirth = Number(document.getElementById("day").value);
    let monthOfBirth = Number(document.getElementById("month").value);
    let yearOfBirth = document.getElementById("year").value;
    let genders = document.getElementById("gender");

}

//arrays

let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function dayValidator () {
    if (month === 2 && Number(yearOfBirth)%4 === 0){
        alert ("please write your name!");
        if(dayOfBirth > 28 || dayOfBirth < 1){
            return false;
        }
    else if (month === 2 && dayOfBirth > 29) {
        return false;
    }
    else if (month === 2 && dayOfBirth < 1) {
        return false;
    }
    else {
        return true;
    }

    } else if (dayOfBirth < 1 || dayOfBirth > 31){
        return false;
    } else {
        return true;
    }

}