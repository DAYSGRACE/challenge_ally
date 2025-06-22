import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-card-generic',
    templateUrl: './card-generic.component.html',
    styleUrls: ['./card-generic.component.scss']
})
export class CardGenericComponent {
    @Input() isLoading: boolean = false;
}
