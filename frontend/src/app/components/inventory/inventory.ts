import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-inventory',
  imports: [MatGridListModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {

  userName = 'José Eduardo';
  private router = inject(Router);

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
