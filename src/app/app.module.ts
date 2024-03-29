import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PaginateModule} from './paginate/paginate.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactsComponent,
    LandingComponent,
    ServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PaginateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
