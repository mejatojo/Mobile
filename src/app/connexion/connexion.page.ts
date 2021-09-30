import { Component, OnInit } from '@angular/core';
import { ListeService } from '../services/liste.services';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  email : string
  password : string
  constructor(private listeS : ListeService) { }

  ngOnInit() {
  }
  seConnecter()
  {
    this.listeS.login(this.email,this.password)
    console.log(this.email+"   "+this.password)
  }
}
