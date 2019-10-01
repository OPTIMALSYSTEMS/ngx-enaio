import { Component, OnInit } from '@angular/core';
import { EnaioSessionService } from 'ngx-enaio';

@Component({
  selector: 'app-load-settings',
  templateUrl: './load-settings.component.html',
  styleUrls: ['./load-settings.component.scss']
})
export class LoadSettingsComponent implements OnInit {
  loading = false;
  settings: any;
  error: any;

  constructor(private sessionService: EnaioSessionService) { }

  ngOnInit() {
  }

  loadSettings(){
    this.loading = true;
    this.sessionService.loadSettings().subscribe(
      (settings) => {
        this.settings = settings;
        this.loading = false;
    }, 
      (error) => {
        this.error = error;
        this.loading = false;
    });
  }
}
