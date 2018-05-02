import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { SidenavOpenCloseExample } from './sidenav/app.sidenav';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavOpenCloseExample,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [SidenavOpenCloseExample],
  entryComponents: [SidenavOpenCloseExample],
  bootstrap: [AppComponent]
})
export class AppModule { }
