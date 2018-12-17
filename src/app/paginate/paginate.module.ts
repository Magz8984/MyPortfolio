import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import {ContactsComponent}from '../contacts/contacts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'skills',component:SkillsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
     RouterModule,
     BrowserAnimationsModule,
     MatMenuModule,
     MatIconModule
  ],
  declarations: [

  ]
})
export class PaginateModule { }
