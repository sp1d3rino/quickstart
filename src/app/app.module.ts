import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ClickMeComponent,KeyUpComponent_v3 }  from './click-me.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ClickMeComponent,KeyUpComponent_v3,HeroFormComponent ],

  bootstrap:    [ AppComponent]
})
export class AppModule { }
