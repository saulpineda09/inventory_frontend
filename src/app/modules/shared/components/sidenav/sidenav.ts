import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatrialModule} from "../../material-module"; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, MatrialModule, RouterModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {

}
