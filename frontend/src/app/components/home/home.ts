import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef  } from '@angular/core';
import { ListView } from '../list-view/list-view';
import { Navbar } from '../navbar/navbar';
import { DataComponentService } from '../dataComponentService';

@Component({
  selector: 'app-home',
  imports: [ListView, Navbar],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  constructor(
    private dataComponentService : DataComponentService
  ){}

  async ngOnInit() {
    this.dataComponentService.loadMovimentacaoEstoque();
  }

  public selectedOption(){
    return this.dataComponentService.selectedOption();
  }

  public objectsList(){
    return this.dataComponentService.objectsList;
  }
}
