import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './common/local-storage.service';
import { Keys } from './common/storage-keys.enum';
import { UiService } from './common/ui-service.service';
import { UserDataService } from './user-data.service';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'helping-cat';
  shouldAskForName: boolean = true;

  constructor(private userDataService: UserDataService, private uiService: UiService){
  }

  ngOnInit(){
    this.userDataService.name$.pipe(
      filter((value) => value !== 'guest'),
      tap(() => {this.shouldAskForName = false})
    ).subscribe();
    
    if(this.shouldAskForName){
      this.uiService.showNameDialog().subscribe(result => {
        this.userDataService.updateName(result);
      });
    }
  }

}
