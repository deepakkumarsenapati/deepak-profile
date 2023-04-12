import { AboutService } from './../../services/about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  about: any;
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((resp) => {
      this.about = resp;
    });
  }
}
