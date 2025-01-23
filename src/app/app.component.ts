import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CampaignCardComponent } from './campaign-card/campaign-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, CampaignCardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cs-ang-playground';

  campaigns = [
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_136.jpg",
      "orientation": "h",
      "name": "Back to School"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_216.jpg",
      "orientation": "v",
      "name": "Back to School"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_150.jpg",
      "orientation": "v",
      "name": "Trick or Treat"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_290.jpg",
      "orientation": "h",
      "name": "Feed Your Joy"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_169.jpg",
      "orientation": "v",
      "name": "Free Kroger Peanut Butter"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_221.jpg",
      "orientation": "h",
      "name": "Dave's Bread"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_243.jpg",
      "orientation": "v",
      "name": "Dave's Bread"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_47.jpg",
      "orientation": "h",
      "name": "Mark West"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_260.jpg",
      "orientation": "v",
      "name": "Real Hydration"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_248.jpg",
      "orientation": "h",
      "name": "Tinted Lip Care"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_295.jpg",
      "orientation": "v",
      "name": "Game Day Ready for Perfect Play"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_312.jpg",
      "orientation": "v",
      "name": "Bathroom Cleaning Made Easy"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_177.jpg",
      "orientation": "v",
      "name": "Comfort Foods Made Better"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_288.jpg",
      "orientation": "v",
      "name": "Cleans Like Clorox"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_309.jpg",
      "orientation": "v",
      "name": "Dailies Now With 0g Added Sugar"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_336.jpg",
      "orientation": "h",
      "name": "Back to School"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_337.jpg",
      "orientation": "h",
      "name": "Fallin' for Brew"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_284.jpg",
      "orientation": "h",
      "name": "Dailies Now With 0g Added Sugar"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_305.jpg",
      "orientation": "h",
      "name": "Comfort Foods Made Better"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/frame_200.jpg",
      "orientation": "h",
      "name": "Feed the Joy"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/P11_ENTRANCE_10-27-24_10-31-24_Aveeno-Daily-Moisturizing-Cream.jpg",
      "orientation": "v",
      "name": "Daily Mositurizing Cream"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/P11_ENTRANCE_10-27-24_10-31-24-WAG-Halloween_7second.jpg",
      "orientation": "v",
      "name": "Here for the Halloween"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/P11_ENTRANCE_10-27-24_11-02-24_P&G-AlwaysDiscreet.jpg",
      "orientation": "v",
      "name": "Bladder Leaks"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/P11_ENTRANCE_10-27-24_11-02-24_P&G-Scale.jpg",
      "orientation": "v",
      "name": "$5 In-store Rewards"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/P11_ENTRANCE_10-27-24_11-30-24_CocaCola.jpg",
      "orientation": "v",
      "name": "Choose Hydration"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/P11_ENTRANCE_10-27-24_11-30-24_Pfizer-65.jpg",
      "orientation": "v",
      "name": "Help Reduce Your Risk"
    },
    {
      "image": "https://barrowsconnectedstore.com/masonry/P11_ENTRANCE_10-27-24_11-30-24_Robitussin-Soft-Chews-Innovation.jpg",
      "orientation": "v",
      "name": "Soft Chews"
    }
  ]

  defaultImage =
    'https://content.barrows.tech/media_live/MEDIA/DISPLAYTYPEGROUP/TN_KROGER_ENTRANCE_STANDEEE_UNIT_PS.png';

  trimToThreeWords(text: string): string {
    const words = text.split(' ');
    const trimmed = words.slice(0, 3).join(' ');
    return words.length > 4 ? trimmed + ' ...' : trimmed;
  }

  trackByCampaign(index: number, campaign: any): string {
    return campaign.name; // or another unique identifier for campaigns
  }

}


