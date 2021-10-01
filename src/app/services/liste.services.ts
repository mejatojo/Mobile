import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
@Injectable({
  providedIn: 'root'
})

export class ListeService {
  url = '';
  list = [
    {
      "id" : 1,
      "nom" : "meja",
      "groupe" : "a",
    },
    {
      "id" : 2,
      "nom" : "nandy",
      "groupe" : "a",
    },
    {
      "id" : 3,
      "nom" : "meja",
      "groupe" : "b",
    }
  ]
  constructor(private http: HttpClient,public router: Router) { }
  get(){
    return this.list
  }
  login(email,password)
  {
    if(email == 'meja' && password == '12345678')
    {
      this.router.navigate(['/tabs/tab1']);
    }
  }
  afaire(id)
  {
    var a = this.list.find(x => x.id === id)
    console.log(a)
    a.nom = "ttt";
  }

}