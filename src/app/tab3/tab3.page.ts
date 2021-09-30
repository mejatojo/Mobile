import { Component } from '@angular/core';
import { ListeService } from '../services/liste.services';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  liste: any
  constructor(private LS:ListeService) {}
  ngOnInit() {
    this.liste = this.LS.get().filter( x => x.id === 3)
  }
}
