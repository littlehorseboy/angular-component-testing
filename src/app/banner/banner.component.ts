import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <h1>
      {{ title }}
    </h1>
  `,
  styles: [
    'h1 { color: green; font-size: 3.5rem }',
  ]
})
export class BannerComponent {
  title = 'Test Banner';
}
