import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NbCardModule, NbThemeModule} from '@nebular/theme';


import { AppComponent } from './app.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import {SmartTableService} from "./smart-table/smart-table.service";
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    Ng2SmartTableModule
  ],
  providers: [SmartTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
