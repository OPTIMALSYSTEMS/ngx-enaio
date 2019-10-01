import { Component, OnInit } from '@angular/core';
import { EnaioSessionService, EnaioSession } from 'ngx-enaio';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  session: Observable<EnaioSession>;
  loading = false;

  constructor(private sessionService: EnaioSessionService) { }


  ngOnInit() {
  }
}
