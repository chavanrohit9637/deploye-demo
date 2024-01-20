import { Injectable } from '@angular/core';
import { Client, Account, Storage, Databases } from 'appwrite';
import { environment } from '../services/constant';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( ) { }
  provider(){
    let client=new Client
    return client
      .setEndpoint(environment.endpoint)
      .setProject(environment.project);
  }
  account(){
    return new Account(this.provider())
  }
  createDB(){
    return new Databases(this.provider())
  }
}
