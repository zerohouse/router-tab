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
    
    
### Usage routerTabs On MatTabGroup
        
    <mat-tab-group routerTabs>
      <mat-tab label="Page A" routerLink="a"></mat-tab>
      <mat-tab label="Page B" routerLink="b"></mat-tab>
      <mat-tab label="Page C" routerLink="c"></mat-tab>
    </mat-tab-group>
    <router-outlet></router-outlet>
