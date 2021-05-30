import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureInView = 'recipes';

  showFeature(feature: string) {
    this.featureInView = feature;
  }
}
