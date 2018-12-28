import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeSide =
  trigger('fadeSide', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-20%)'
      }),
      animate('300ms ease-in',
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        }))
    ])
  ]);
