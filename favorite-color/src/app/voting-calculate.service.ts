import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class VotingCalculateService {
  socket = io.io('localhost:3000');
}
