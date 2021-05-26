import { Component, OnInit, Input } from '@angular/core';
import {Users} from '../../Users'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  user!: Users;

  constructor() { }

  ngOnInit(): void {
  }

}
