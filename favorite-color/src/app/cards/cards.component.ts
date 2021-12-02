import { Component, Input } from '@angular/core';
import { Color } from '../colors/color.interface';
import { VotingCalculateService } from '../voting-calculate.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() colorItem!: Color;
  @Input() relativeToMax!: number;
  constructor(private votingCalculateService: VotingCalculateService) {}

  vote() {
    this.votingCalculateService.socket.emit(
      'ClientVoted',
      this.colorItem.color
    );
  }
}
