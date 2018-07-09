import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { DemosComponent } from './demos/demos.component';
import { AboutComponent } from './about/about.component';
import { AccomplishmentComponent } from './accomplishment/accomplishment.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SkillsComponent,
    ExperiencesComponent,
    EducationComponent,
    DemosComponent,
    AboutComponent,
    AccomplishmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
