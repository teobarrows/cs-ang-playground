import { Component, Input } from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.css'],
  imports: [
    MatIcon
  ]
})
export class CampaignCardComponent {
  @Input() campaign: { name: string; image: string; } | undefined;

  trimToThreeWords(name: string): string {
    return name.split(' ').slice(0, 3).join(' ');
  }
}
