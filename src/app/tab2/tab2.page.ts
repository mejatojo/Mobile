import { Component } from '@angular/core';
import { ListeService } from '../services/liste.services';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  liste: any
  constructor(private LS:ListeService) {}
  ngOnInit() {
    this.liste = this.LS.get().filter( x => x.id === 2)
  }
}
