import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import { MainComponent } from './components/main/main.component';
import { TestComponent } from './components/test/test.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class ConfigurebleResolver implements Resolve<any> {

  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log('data ', route.data.dataForResolve);
    return Observable.of(route.data.dataForResolve);
  }
}

const appRoutes: Routes = [
  { path: '', component: MainComponent,
    data: {
      dataForResolve: 'main'
    },
    resolve: {
      data: ConfigurebleResolver
    }
  },
  { path: 'test',      component: TestComponent,
    data: {
      dataForResolve: 'test'
    },
    resolve: {
      data: ConfigurebleResolver
    }
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ConfigurebleResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
