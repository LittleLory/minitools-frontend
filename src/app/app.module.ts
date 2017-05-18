import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { Logger } from './log.service'
import { ToolService } from './tool.service'

import { AppComponent } from './app.component';
import {TopNavComponent} from  './top-nav.component';
import {AddToolFormComponent} from './add-tool-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    AddToolFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [Logger, ToolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
