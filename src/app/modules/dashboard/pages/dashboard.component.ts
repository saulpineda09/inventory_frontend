import { Component } from '@angular/core';
import { Sidenav } from '../../shared/components/sidenav/sidenav';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Sidenav],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent{

}
