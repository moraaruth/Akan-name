
function getAkanName() {

    let dayOfBirth = Number(document.getElementById("day").value);

    let monthOfBirth = Number(document.getElementById("month").value);

    let yearOfBirth = document.getElementById("year").value;

    let genders = document.getElementsByName("gender");

    let monthValid = monthValidator();
    let dayValid = dayValidator();


    function monthValidator() {
        if (monthOfBirth < 1 || monthOfBirth > 12) {
            alert("You entered an invalid month, please try again");
        } else {
            return true;
        }
    }

    function dayValidator() {
        if (monthOfBirth === 2 && Number(yearOfBirth) % 4 === 0) {
            if (dayOfBirth > 28 || dayOfBirth < 1) {
                alert("You entered an invalid day, please try again");
            } else if (monthOfBirth === 2 && dayOfBirth > 29) {
                alert("You entered an invalid day, please try again");
            } else if (monthOfBirth === 2 && dayOfBirth < 1) {
                alert("You entered an invalid day, please try again");
            } else {
                return true;
            }
        } else if (dayOfBirth < 1 || dayOfBirth > 31) {
            alert("You entered an invalid day, please try again");
        } else {
            return true;
        }

    }


    let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0, 2)) / 4) - 2 * Number(yearOfBirth.slice(0, 2)) - 1) +
        ((5 * Number(yearOfBirth.slice(2, 4)) / 4)) + ((26 * (monthOfBirth + 1) / 10)) + dayOfBirth) % 7);


    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    let index;

    if (dayOfWeekNumber == 0) {
        index = 6;
    } else {
        index = dayOfWeekNumber - 1;
    }

    alert("You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index]) !==
        ("You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index]);


    if (myGenderValue == "male" && monthValid && dayValid) {
        document.getElementById('result') = ("You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index]);

        return false;
    }

    else if (myGenderValue == "female" && monthValid && dayValid) {
        document.getElementById('result').textContent = ("You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index]);


        return false;
    } 
}







