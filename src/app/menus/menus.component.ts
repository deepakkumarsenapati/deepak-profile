import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  menu: any;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((resp) => {
      this.menu = resp;
    });
  }
}
