import { 
  Component,  
  Input} from '@angular/core';

import { 
  trigger, 
  style, 
  transition, 
  animate, 
  state } from "@angular/animations";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('slideIn', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-600px)'
        }),
        animate(400)
      ])
    ]),
    trigger('slideUp', [
      state('up', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(600px)'
        }),
        animate(400)
      ])
    ])
  ]
})
export class ProfileComponent {

  @Input() profile: any;
  @Input() repos: any;
  @Input() userFound: boolean;

  constructor() { }

}
