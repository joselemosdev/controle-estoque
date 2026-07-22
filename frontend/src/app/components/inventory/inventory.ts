import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  standalone: true,
  selector: 'app-inventory',
  imports: [MatGridListModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {

  userName = 'José Eduardo';
}
