import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../../../services/users.service';
import { requestListParams } from '../../../../types/requestListParams.class';
import { UserType } from '../../../../types/user.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  users: UserType[] = [];
  listParams = new requestListParams();
  /**
   *
   */
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers(this.listParams).subscribe({
      next: (response) => {
        this.users = response.data;
      },
    });
  }
}
