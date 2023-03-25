import { Component ,OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import{User} from '../models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users!: User[];
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      })
  }

  deleteUser(id: string) {
    if (confirm('Are You Sure??')) {
      this.userService.deleteUser(id).subscribe(res => {
        if (res.status === 200) {
          for (let i = 0; i < this.users.length; i++){
            if (id === this.users[i]._id) {
              this.users.splice(i, 1);
              break;
            }
          }
        }
      })
    }
  }
}
