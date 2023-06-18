import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-list-page-user',
  templateUrl: './list-page-user.component.html',
  styleUrls: ['./list-page-user.component.scss'],
})
export class ListPageUserComponent implements OnInit {
  users = [];

  columns: string[] = ['id', 'name', 'cpf', 'email', 'birth', 'action'];

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.userService.load().subscribe((response) => {
      this.users = response;
    });
  }

  create() {
    this.route.navigate(['user', 'form']);
  }

  delete(id: number) {
    this.userService.destroy(id).subscribe((response) => {
      this.load();
    });
  }

  edit(id: number) {
    this.route.navigate(['user', 'form', id]);
  }
}
