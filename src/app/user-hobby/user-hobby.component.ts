import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-hobby',
  templateUrl: './user-hobby.component.html',
  styleUrls: ['./user-hobby.component.css']
})
export class UserHobbyComponent {
  @Input() hobby: string;
}
