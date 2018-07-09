import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
}

@Component({
  template: 'page A',
})
export class PageAComponent {
}

@Component({
  template: 'page B',
})
export class PageBComponent {
}

@Component({
  template: 'page C',
})
export class PageCComponent {
}
