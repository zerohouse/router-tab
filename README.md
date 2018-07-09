# RouterTab

Router-Tab Directive

### Install
    
    npm install @zerohouse/route-tab --save
    
### Import
    @NgModule({
      declarations: [
        AppComponent, PageAComponent, PageBComponent, PageCComponent
      ],
      imports: [
        RouterModule.forRoot([
          {path: '', pathMatch: 'full', redirectTo: 'a'},
          {path: 'a', component: PageAComponent},
          {path: 'b', component: PageBComponent},
          {path: 'c', component: PageCComponent}
        ]),
        BrowserModule,
        RouterTabModule,
        BrowserAnimationsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }
    
    
### Usage routerTab=[tabIndex]
    <mat-tab-group>
      <mat-tab label="Page A" routerLink="a" [routerTab]="0"></mat-tab>
      <mat-tab label="Page B" routerLink="b" [routerTab]="1"></mat-tab>
      <mat-tab label="Page C" routerLink="c" [routerTab]="2"></mat-tab>
    </mat-tab-group>
