import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './common/local-storage.service';
import { Keys } from './common/storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  readonly name$ = new BehaviorSubject<string>('guest');

  constructor(private storageService: LocalStorageService) {
    this.name$.next(this.storageService.read(Keys.Name) || 'guest')
  }

  updateName(newName: string){
    this.storageService.write(Keys.Name, newName);
    this.name$.next(newName);
  }
}
