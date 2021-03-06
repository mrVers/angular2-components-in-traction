import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linky'
})
export class LinkyPipe implements PipeTransform {
  transform(message: string): string {
    return message.replace(/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i, function(text, link) {
      return '<a href="'+ text +'">'+ text +'</a>';
    });
  }
}

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {
  transform(message: string): string {
    return message.replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  }
}

@Component({
  selector: 'ng-app',
  template: '<div [innerHTML]="message | linky | uppercase"></div>'
})
export class MyAppComponent {
  message: string = 'Searching in http://bing.com for the sake of knowing...';
}