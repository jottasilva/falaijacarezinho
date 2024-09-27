import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FraseComponent } from './components/frase/frase.component';
import { SearchComponent } from './components/search/search.component';
import { CardPraiseComponent } from './components/card-praise/card-praise.component';
import { CardsComponent } from './components/cards/cards.component';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { CardComplaintComponent } from './components/card-complaint/card-complaint.component';
import { CardSuggestionComponent } from './components/card-suggestion/card-suggestion.component';
import { CardCriticismComponent } from './components/card-criticism/card-criticism.component';
import { CardReclamationComponent } from './components/card-reclamation/card-reclamation.component';
import { FooterComponent } from './components/footer/footer.component';
import { DevelopedComponent } from './components/developed/developed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    NavbarComponent,
    FraseComponent,
    SearchComponent,
    CardPraiseComponent,
    CardsComponent,
    ComplaintComponent,
    CardComplaintComponent,
    CardSuggestionComponent,
    CardCriticismComponent,
    CardReclamationComponent,
    FooterComponent,
    DevelopedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
