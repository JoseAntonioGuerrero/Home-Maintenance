import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { ChecklistComponent } from './components/checklist/checklist.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    ChecklistComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
