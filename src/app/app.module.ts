import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './features/about/about.component';
import { EducationComponent } from './features/education/education.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { MenusComponent } from './menus/menus.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialIconsComponent } from './features/social-icons/social-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    ContactComponent,
    LayoutComponent,
    MenusComponent,
    LoadingSpinnerComponent,
    SocialIconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
