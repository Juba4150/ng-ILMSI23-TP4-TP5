import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsersService } from '../../../../services/users.service';
import { UserHttpAddDto } from '../../../../types/userHttpAddDto.type';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent implements OnInit {
  userForm!: FormGroup;
  /**
   *
   */
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      job: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    let userModel: UserHttpAddDto = this.userForm.value;
    this.userService.addUser(userModel).subscribe({
      next: (value) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User added successfully',
        });

        this.userForm.reset();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'err.error',
        });
      },
    });
  }
}
