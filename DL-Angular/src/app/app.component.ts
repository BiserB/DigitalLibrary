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
    this.users$ = resourcesService.getUsers();
    this.resources$ = resourcesService.getResources();
  }

  DownloadFile(fileName: string) {
    this.resourcesService.downloadFile(fileName).subscribe(
      data => {

        const downloadedFile = new Blob([data], { type: data.type });
        const anchor = document.createElement('a');
        document.body.appendChild(anchor);

        anchor.setAttribute('style', 'display:none;');
        anchor.download = fileName;
        const url = URL.createObjectURL(downloadedFile);
        anchor.href = url;
        anchor.target = '_blank';
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url)
      }

    );

  }

}
