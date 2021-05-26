import { Component, OnInit } from '@angular/core';
import {Users} from '../../Users';
import {USERS} from '../../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : Users[] = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
