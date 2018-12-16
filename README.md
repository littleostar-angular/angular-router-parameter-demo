

---

- from
  - https://scotch.io/tutorials/handling-route-parameters-in-angular-v2.

- angular
  - version 7
  - router demo
  - router parameter

- access demo
  - [demo](https://littleostar-angular.github.io/angular-router-parameter-demo/)

---


app-routing.module.ts
```typescript
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/:username', component: UserComponent}
];
```

user.component.ts
```typescript
export class UserComponent implements OnInit {
  username: string;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    // this.username = this.activatedRoute.snapshot.params.username;
    this.activatedRoute.paramMap.subscribe( para => {
      this.username = para.get('username');
    });
  }

}
```

user.component.html
```html
<div>
  user component works!
</div>

<div *ngIf="username">
  <p>
    user works! {{username}}
  </p>
  <app-user-detail [username]="username"></app-user-detail>
</div>
```

user-detail.component.ts
```typescript
export class UserDetailComponent  {
  @Input() username: string;
}
```

user-detail.component.html
```html
<p>
  user-detail works!{{username}}
</p>

```

---

end
