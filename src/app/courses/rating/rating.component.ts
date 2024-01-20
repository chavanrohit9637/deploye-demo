import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() maxRating: number = 5;
  @Input() rating: number = 0;

  isAboveRating(index: number): boolean {
   
    return index >= this.rating;
  }
}
