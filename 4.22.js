class User {
    id;
    firstName = "";
    lastName = "";

    constructor() {}

    getId() {id=this.id};
    setId() {"id:"+this.id};
    getfirstName() {firstName=this.firstName};
    setfirstName() {"First Name:"+this.firstName};
    getlastName() {lastName=this.lastName};
    setlastName() {"Last Name:"+this.lastName};
    }
}

class Author extends User { /*
    getFistName() {     // метод додано
        return this.firstName;
    }
    sayHi() {           // метод перевизначено
        console.log(
            'Вітаю, ' + this.firstName );
    }
}

let user = new AdminUser( 'Roman' );

console.log( user );	// AdminUser {firstName: "Roman"}

user.sayHi();          	// Вітаю, Roman

console.log( user.getFistName() );      // Roman*/