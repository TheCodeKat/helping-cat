import { Injectable } from '@angular/core';
import { Keys } from './storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  read(key: string){
    return localStorage.getItem(key)
  }

  write(key: string, value: string){
    localStorage.setItem(key, value);
  }

  remove(key: string){
    localStorage.removeItem(key);
  }
}
