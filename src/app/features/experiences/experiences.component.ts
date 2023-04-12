import { ExperienceService } from './../../services/experience.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  educations: any;
  constructor(private expservice: ExperienceService) {}

  ngOnInit(): void {
    this.expservice.getExperience().subscribe((resp) => {
      this.educations = resp;
    });
  }
}
