function info() {
    var personAge = "";
    var personName = "";
    var userOfNumber = 0;
    while (enterNumberOfuser == 0 || isNaN(enterNumberOfuser)) {
        var enterNumberOfuser = +prompt("Nechta ism kiritmoqchisiz?");
    };
    for (let i = 1; i <= enterNumberOfuser; i++) {
        personName = prompt("enter your name", 'name');
        personAge = +prompt("enter your age", 20);
        userOfNumber++;
        const infoPerson = {};
        infoPerson.name = personName;
        infoPerson.age = personAge;
        infoPerson.userNumber = userOfNumber;
        for (const key in infoPerson) {
            console.log('Ismingiz: ' + infoPerson.name + ", " + "Yoshingiz: " + infoPerson.age + ", " + "User raqamingiz " + infoPerson.userNumber);
        }
    }
};
info();
