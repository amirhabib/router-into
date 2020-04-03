import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

const routes = [
  {
    path: 'componentA',
    component: AComponent
  },
  {
    path: 'componentB',
    component: BComponent
  },
  {
    path: 'componentB/:id',
    component: BComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
