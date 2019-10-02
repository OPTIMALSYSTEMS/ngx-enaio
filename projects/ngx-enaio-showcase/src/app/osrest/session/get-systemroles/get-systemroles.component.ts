import { Component, OnInit } from '@angular/core';
import { EnaioSessionService, EnaioSystemRole } from 'ngx-enaio';

@Component({
  selector: 'app-get-systemroles',
  templateUrl: './get-systemroles.component.html',
  styleUrls: ['./get-systemroles.component.scss']
})
export class GetSystemrolesComponent implements OnInit {
  loading = false;
  systemroles: EnaioSystemRole[];
  error: any;

  constructor(private sessionService: EnaioSessionService) {}

  ngOnInit() {}

  loadSystemRoles() {
    this.loading = true;
    this.sessionService.systemroles().subscribe(
      systemroles => {
        this.systemroles = systemroles;
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }
}
