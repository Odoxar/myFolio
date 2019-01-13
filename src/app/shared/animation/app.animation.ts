import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
  query,
  animateChild,
  group
} from '@angular/animations';

export const headerAnimationsTrigger = trigger('headerAnimations', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-100%)'
    }),
    group([
      animate('500ms ease-in', style({
        opacity: 1,
        transform: 'translate(0)'
      })),
      query('.main-container > *', animate('500ms'), { optional: true })
    ])
  ]),
  transition(':leave', [
    group([
      animate('500ms ease-out', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      query('.main-container > *', animate(500), { optional: true })
    ])
  ]),
 
])

export const langHoverTriger = trigger('langHover', [
  transition(':enter', [
    style({
     
      opacity: 0
    }),
    animate('500ms', style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate('300ms', style({
      
      opacity: 0
    }))
  ])
])

export const routerTransitionTrigger = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed'}), {optional: true}),
    query(':enter', style({ transform: 'translateX(100%)'}), {optional: true}),
    sequence([
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          style({ transform: 'opacity: 0' }),
          animate('300ms',
            style({ transform: 'opacity: 1' }))
        ], {optional: true}),
        query(':enter', [
          style({ transform: 'translateX(100%)'}),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
            style({ transform: 'translateX(0%)'})),
        ], {optional: true}),
      ]),
      query(':enter', animateChild(), {optional: true})
    ])
  ])
]);

export const fadeAnimation = trigger('fadeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':enter',
      [style({ opacity: 0, })],
      { optional: true }
    ),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const fadeInOutTrigger = trigger('fadeInOut', [
  transition(':enter', [   // :enter is alias to 'void => *'
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 }))
  ]),
  transition(':leave', [   // :leave is alias to '* => void'
    animate(300, style({ opacity: 0 }))
  ])
])