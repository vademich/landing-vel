import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    animations: [
        trigger('text', [
            state('off',
                style({
                    transform: 'translateX(0px)',
                })),
            state('on',
                style({
                    transform: 'translateX(70px)',
                })),
            transition('on => off', [animate('0.2s')]),
            transition('off => on', [animate('0.2s')])
        ])
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.less'
})
export class MainComponent {
    isHover = false;
    textHover() {
        this.isHover = !this.isHover;
    }
}
