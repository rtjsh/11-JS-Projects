const passwordBox = document.getElementById("password");
const length = 12; // Length of password

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const Number = "0123456789";

const Symbol ="!@#$%^&*()_+-={}[]|\:<>,.?/~";

const allChars = uppercase + lowercase + Number + Symbol;

function createPassword()
{
    let Password = "";
    Password+= uppercase[Math.floor(Math.random()* uppercase.length)];
    Password+= lowercase[Math.floor(Math.random()* lowercase.length)];
    Password+= Number[Math.floor(Math.random()* Number.length)];
    Password+= Symbol[Math.floor(Math.random()* Symbol.length)];

    while(length > Password.length)
    {
        Password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = Password;
}

function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");

}