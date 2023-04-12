import { Component, OnInit } from '@angular/core';
import { EducationService } from './../../services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educations: any;
  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe((resp) => {
      this.educations = resp;
    });
  }
}
