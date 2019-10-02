import { Component, OnInit } from '@angular/core';
import { EnaioSessionService, EnaioSession } from 'ngx-enaio';

@Component({
  selector: 'app-get-session',
  templateUrl: './get-session.component.html',
  styleUrls: ['./get-session.component.scss']
})
export class GetSessionComponent implements OnInit {
  loading = false;
  session: EnaioSession;
  error: any;
  refresh: false;

  constructor(private sessionService: EnaioSessionService) {}

  ngOnInit() {}

  loadSession() {
    this.loading = true;
    this.sessionService.session(this.refresh).subscribe(
      session => {
        this.session = session;
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }
}
