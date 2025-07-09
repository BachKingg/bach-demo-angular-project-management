import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    MatToolbarModule,
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
