import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule, PreloadAllModules } from '@angular/router';


import { AppComponent } from './app.component';
//routes
import { routes } from './app.routes';
//reducers
import { reducers } from './app.reducers';
//action
import { TodoActions } from "./todo/todo.actions";
//module
import {ShareModule} from "./share/share.module";
import { TodoModule } from "./todo/todo.module";
import { HeroModule } from './hero/hero.module';
import { MultiStepModule } from './multi-step/multi-step.module';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules }),
    StoreModule.forRoot(reducers),
    HeroModule,
    TodoModule,
    MultiStepModule
  ],
  providers: [TodoActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
