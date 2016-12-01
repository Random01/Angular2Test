import { Component } from '@angular/core';

@Component({
    selector: 'my-playground',
    template: `
        <div>{{message}}</div>
    `
})

//export interface Person{
//    firstName: string;
//    lastName: string;
//}

//function getName(person: Person) {
//    return person.firstName + ' ' + person.lastName;
//}

export class MyPlayground{
    message = 'Hello World!';
    //message = getName({
    //    firstName: 'Alexsei',
    //    lastName: 'Matvienko'
    //});
}