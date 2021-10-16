import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Nuestros componentes
import { AuthComponent } from './components/auth/auth.component';
import { RolesComponent } from './components/roles/roles.component';
import { TablesComponent } from './components/tables/tables.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

// Firebase
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RolesComponent,
    TablesComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
