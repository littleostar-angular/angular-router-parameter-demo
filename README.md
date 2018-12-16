

---

- from
  - scotch.io handling-route-parameters-in-angular-v2

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
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/:username', component: UserComponent},
  {path: 'users/:username/:hobby', component: UserComponent},
];
```

user.component.ts
```typescript
this.activatedRoute.paramMap.subscribe(para => {
      this.username = para.get('username');
      this.hobby = para.get('hobby');
    });
```



---

end
