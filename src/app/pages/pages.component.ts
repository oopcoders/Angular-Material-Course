import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from '../services/theme.service';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-pages',
  imports: [RouterOutlet, FormsModule, MatRadioModule, MatSidenavModule, MatProgressSpinnerModule, MatProgressBarModule,
    RouterLink, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  breadcrumb = 'Dashboard'; // default fallback
  selectedColor: 'green' | 'red' | 'blue' = 'green'; // default
  selectedMode: 'light' | 'dark' = 'light';


  constructor(private router: Router, private route: ActivatedRoute,
    private title: Title, public themeService: ThemeService, public loaderService: LoaderService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const child = this.getChild(this.route);
        child.data.subscribe(data => {
          this.breadcrumb = data['breadcrumb'] || 'Dashboard';
          this.title.setTitle(this.breadcrumb);
        });
      });

    this.selectedColor = this.themeService.color();
    this.selectedMode = this.themeService.mode()
  }

  getChild(route: ActivatedRoute): ActivatedRoute {
    if (route.firstChild) {
      return this.getChild(route.firstChild);
    }
    return route;
  }
}