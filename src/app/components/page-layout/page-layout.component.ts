import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  imports: [
    MatSidenavModule,
    HeaderComponent,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
})
export class PageLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
