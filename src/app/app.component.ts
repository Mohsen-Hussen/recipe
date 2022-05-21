import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() loadedFeature = 'recipe';
  title = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
