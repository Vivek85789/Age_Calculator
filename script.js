function calculateAge() {
    var birthdateInput = document.getElementById('birth').value;
    var birthdate = new Date(birthdateInput);
    var today = new Date();

    var age = today.getFullYear() - birthdate.getFullYear();
    var month = today.getMonth() - birthdate.getMonth();
    var day = today.getDate() - birthdate.getDate();

    if (day < 0) {
        month--;
        var prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        day += prevMonth;
    }
    if (month < 0) {
        month += 12;
        age--;
    }
    document.getElementById('result').innerHTML = 
        "Your age is: " + age + " years, " + month + " months and " + day + " days.";
}
