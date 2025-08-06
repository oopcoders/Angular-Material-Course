import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, MatButtonToggleModule, MatGridListModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private breakpointObserver = inject(BreakpointObserver);

  readonly col$ = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Medium]).pipe(
    map(state => state.matches ? 1 : 2)
  );

}