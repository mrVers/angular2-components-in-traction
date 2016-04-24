import {Component, ElementRef} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'super-marquee,[super-marquee],.super-marquee',
  template: ''
})
class SuperMarqueeComponent {
  constructor(private _element: ElementRef) {
    var scrollingText = `<marquee>
      <div class="wave">
        <span>Angular2 </span>
        <span>Directives </span>
        <span>inAction, </span>
        <span>Yey..!!</span>
      </div>\
    </marquee>`;

    _element.nativeElement.innerHTML = scrollingText;
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <!-- Element -->
    <super-marquee></super-marquee>
    
    <!-- Attribute -->
    <div super-marquee></div>
    
    <!-- Class -->
    <div class='super-marquee'></div>
  `,
  directives: [SuperMarqueeComponent]
})
export class MyApp {
  
}

bootstrap(MyApp);