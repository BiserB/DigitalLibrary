import { Component } from '@angular/core';
import { ResourcesService } from './services/resources.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DL-Angular';

  users$: Observable<Object>;
  resources$: Observable<Object>;

  constructor(private resourcesService: ResourcesService){

    // resourcesService.getUsers().subscribe(res => {
      
    //   this.users$ = res;
    //   console.log("users..",this.users$);
    // });

    this.users$ = resourcesService.getUsers();

    this.resources$ = resourcesService.getResources();

    // resourcesService.getResources().subscribe(res => {

    //   this.resources$ = res;
    //   console.log("resources...", this.resources$);
    // });
  }
}
