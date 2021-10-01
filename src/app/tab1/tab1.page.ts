import { Component, OnInit } from '@angular/core';
import { ListeService } from '../services/liste.services';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  liste: any
  constructor(private LS:ListeService) {}
  ngOnInit() {
    this.liste = this.LS.get().filter( x => x.groupe === "a")

  }
  afaire(id:number)
  {
    this.LS.afaire(id)
  }
}
