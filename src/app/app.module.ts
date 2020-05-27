import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicGeometryComponent } from './basic-geometry/basic-geometry.component';
import { SimpleGraphComponent } from './common/simple-graph/simple-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicGeometryComponent,
    SimpleGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
