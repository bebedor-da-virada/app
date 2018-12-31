import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from '../pages/info/info.component';
import { RankingComponent } from '../pages/ranking/ranking.component';

import { NgbModalModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    RankingComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    StorageServiceModule,
    FormsModule,
    AppRoutingModule,
    NgbModalModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
