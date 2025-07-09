import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ITableLayout } from '@interfaces';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ]
})
export class TableLayoutComponent implements OnInit {
  @Input() tableSetting?: ITableLayout;
  @Input() loading: WritableSignal<boolean> = signal(false);

  @Output() search = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Output() refresh = new EventEmitter();

  tbStyleLoading = computed(() => this.loading() ? 'hidden' : 'auto');
  constructor() { }

  ngOnInit() {
  }

  onClickSearch() {
    this.search.emit();
  }

  onClickReset() {
    this.reset.emit();
  }

  onClickRefresh() {
    this.refresh.emit();
  }

}
