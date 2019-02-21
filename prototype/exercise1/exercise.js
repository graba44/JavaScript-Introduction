/* Tworzymy object i przypisujemy do niego wartości oraz funkcję, która po wywołaniu wyświetla wartość firstName i last Name */

/*
function person(firstName, lastName) {

    return {
        firstName: firstName,
        lastName: lastName,
        sayHello: function() {
            console.log("Hi! My name is " + this.firstName + " " + this.lastName);
        }
    };
}
*/

function Person(firstName, lastName) {
    
    this.firstName = firstName;
    this.lastName = lastName;
     
}

// prototype jest to taki obiekt, dzięki temu funkcja sayHello jest zapisana w pamięci tylko raz
Person.prototype.sayHello = function() {
    console.log("Hi! My name is " + this.firstName + " " + this.lastName);
};


//wywołując jakąś funkcję ze słowem kluczowym "new". To jest to funkcja konstruującą i ona ma dostęp do słowa "this". This kieruje na ten nowy obiekt.

var john = new Person("John", "Doe");
var jane = new Person("Jane", "Doe");

/* łańcuch dziedzieczenia obiektów

Object.prototype();
        V
Person.prototype();
        V
jane.goodMorning;

*/




