import { SocialService } from './../../services/social.service';
import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})
export class SocialIconsComponent implements OnInit {
  facebook = faFacebook;
  twitter = faTwitter;
  instagram = faInstagram;
  linkdin = faLinkedin;
  socialLinks: any;
  constructor(private socialService: SocialService) {}

  ngOnInit(): void {
    this.socialService.getSocialLinks().subscribe((resp) => {
      this.socialLinks = resp;
    });
  }
}
