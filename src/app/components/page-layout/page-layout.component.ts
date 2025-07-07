import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../header/header.component';
import { MenuService } from '@services';

@Component({
  standalone: true,
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  imports: [
    MatSidenavModule,
    HeaderComponent,
    MatListModule,
    MatDividerModule,
  ],
})
export class PageLayoutComponent implements OnInit {
  visibleMenu: WritableSignal<boolean> = signal(false);

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.visibleMenu.set(this.menuService.visible);
    this.menuService.visible$.subscribe((resp: any) => {
      this.visibleMenu.set(resp);
    });
  }

}
