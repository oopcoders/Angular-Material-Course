import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from '../services/theme.service';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-pages',
  imports: [RouterOutlet, FormsModule, MatRadioModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  breadcrumb = 'Dashboard'; // default fallback
  selectedColor: 'green' | 'red' | 'blue' = 'green'; // default


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
  }

  getChild(route: ActivatedRoute): ActivatedRoute {
    if (route.firstChild) {
      return this.getChild(route.firstChild);
    }
    return route;
  }
}
