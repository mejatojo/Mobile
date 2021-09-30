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
      "prenom" : "tojo",
    },
    {
      "id" : 2,
      "nom" : "nandy",
      "prenom" : "lova",
    },
    {
      "id" : 3,
      "nom" : "meja",
      "prenom" : "hope",
    }
    ,
    {
      "id" : 3,
      "nom" : "fsdfdsf",
      "prenom" : "hofsdfpe",
    },
    {
      "id" : 1,
      "nom" : "fsd",
      "prenom" : "fs",
    },
    {
      "id" : 1,
      "nom" : "fds",
      "prenom" : "tosfsdfdsjo",
    }, 
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

}