import { computed, effect, Injectable, signal } from '@angular/core';

const THEME_COLOR = 'theme-color';
const THEME_MODE = 'theme-mode';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public mode = signal<'light' | 'dark'>('light');
  public color = signal<'green' | 'red' | 'blue'>('green');

  public currentTheme = computed(() => `${this.mode()}-${this.color()}`) // dark-green
  //public currentTheme = computed(() => this.color());

 constructor() {

    const mode = localStorage.getItem(THEME_MODE) as 'light' | 'dark'

    if (mode) {
      this.mode.set(mode);
    }

    const color = localStorage.getItem(THEME_COLOR) as 'green' | 'red' | 'blue'
    if (color) {
      this.color.set(color);
    }

    effect(() => {
      document.documentElement.className = this.currentTheme();
      localStorage.setItem(THEME_COLOR, this.color());
      localStorage.setItem(THEME_MODE, this.mode());
    });

  }

  setMode(value: 'light' | 'dark') {
    this.mode.set(value);
  }


  setColor(value: 'green' | 'red' | 'blue') {
    this.color.set(value);
  }

}
