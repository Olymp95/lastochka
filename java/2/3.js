var login = prompt(`Ведідть логін`);
if (login == `admin`) {
    var password = prompt(`Ведіть пароль`);
    if (password == `password`) {alert(`Welcome`)} 
        else if (password == undefined) alert(`Canceled`) 
            else  {alert(`wrong password`)};
} else if (login == undefined) {
    alert(`Canceled`);
} else alert(`Access denied`);