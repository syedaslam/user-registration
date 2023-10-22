import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {


  constructor(public us: UserServiceService) { }

  deleteUser(index: any) {
    this.us.usersList.splice(index, 1);
  }

}
