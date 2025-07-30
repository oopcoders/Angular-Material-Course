import { computed, effect, Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'theme-class';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public mode = signal<'light' | 'dark'>('light');
  public color = signal<'green' | 'red' | 'blue'>('green');

  //public currentTheme = computed(() => `${this.mode()}-${this.color()}`)
  public currentTheme = computed(() => this.color());

  constructor() {

    const saved = localStorage.getItem(STORAGE_KEY) as 'green' | 'red' | 'blue'
    if (saved) {
      this.color.set(saved);
    }

    effect(() => {
      document.documentElement.className = this.currentTheme();
      localStorage.setItem(STORAGE_KEY, this.color());
    });

  }

  setMode(value: 'light' | 'dark') {
    this.mode.set(value);
  }


  setColor(value: 'green' | 'red' | 'blue') {
    this.color.set(value);
  }

}
