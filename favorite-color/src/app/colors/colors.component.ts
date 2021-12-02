import { Component, OnInit } from '@angular/core';
import { VotingCalculateService } from '../voting-calculate.service';
import { Color } from './color.interface';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit {
  colors!: Color[];
  max!: number;

  constructor(private votingCalculateService: VotingCalculateService) {}

  ngOnInit(): void {
    this.votingCalculateService.socket.on('ColorList', (data) => {
      this.colors = data.colors;
      this.max = data.max;
    });

    this.votingCalculateService.socket.emit('ClientReady');
  }

  relationToMax(color: Color): number {
    return Math.round(100 * (color.totalVotes / this.max));
  }
}
