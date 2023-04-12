import { ContactComponent } from './features/contact/contact.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { EducationComponent } from './features/education/education.component';

import { AboutComponent } from './features/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'experience',
    component: ExperiencesComponent,
  },
  {
    path: 'project',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
