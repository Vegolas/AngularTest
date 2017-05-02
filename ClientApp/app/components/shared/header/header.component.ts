
import { Component } from '@angular/core';

@Component({
    selector: 'shared-element',
    templateUrl: '/header.component.html'
})
export class HeaderComponent {
    name: string;

    constructor() {
        this.name = 'Sam';
    }
}
