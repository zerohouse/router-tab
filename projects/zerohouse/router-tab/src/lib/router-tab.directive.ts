import {Directive, ElementRef, Host, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material';
import {Subscription} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from '@angular/router';

@Directive({
  selector: '[routerTab]'
})
export class RouterTabDirective extends RouterLink implements OnInit, OnDestroy {
  subs = new Subscription();

  @Input()
  routerTab;

  constructor(private host: MatTab, @Host() private parent: MatTabGroup,
              private routerc: Router, route: ActivatedRoute, renderer: Renderer2, el: ElementRef) {
    super(routerc, route, null, renderer, el);
    this.parent = parent;
  }

  ngOnInit(): void {
    this.setIndex();
    this.subs.add(this.routerc.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.setIndex();
      }
    }));
    this.subs.add(this.parent.selectedTabChange.subscribe(() => {
      if (!this.host.isActive) {
        return;
      }
      this.routerc.navigateByUrl(this.urlTree);
      return true;
    }));
  }

  private setIndex() {
    if (this.routerc.isActive(this.urlTree, false)) {
      this.parent.selectedIndex = this.routerTab;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
