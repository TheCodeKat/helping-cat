import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './common/local-storage.service';
import { Keys } from './common/storage-keys.enum';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-name',
  template: `
  <h1>Hello, {{ this.userDataService.name$ | async }}!</h1>
  `,
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  constructor(public userDataService: UserDataService) {
  }

  ngOnInit(): void {

  }

}
