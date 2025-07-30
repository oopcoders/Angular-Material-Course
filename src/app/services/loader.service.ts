import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private spinnerVisible = signal(false);
  private progressBarVisible = signal(false);

  readonly showSpinner = this.spinnerVisible.asReadonly();
  readonly showProgressBar = this.progressBarVisible.asReadonly();

  toggleSpinner(value: boolean) {
    this.spinnerVisible.set(value);
  }

  toggleProgressBar(value: boolean) {
    this.progressBarVisible.set(value);
  }

  // Optional helpers
  startLoading() {
    this.toggleSpinner(true);
    this.toggleProgressBar(true);
  }

  stopLoading() {
    this.toggleSpinner(false);
    this.toggleProgressBar(false);
  }
}
