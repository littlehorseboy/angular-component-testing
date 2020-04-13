import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch',
  templateUrl: './lightswitch.component.html',
  styleUrls: ['./lightswitch.component.scss']
})
export class LightswitchComponent {
  isOn = false;

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }

  clicked() {
    this.isOn = !this.isOn;
  }
}
