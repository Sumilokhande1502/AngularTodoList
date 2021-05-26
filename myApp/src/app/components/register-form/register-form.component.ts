import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  title = 'User Info';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddUser(){
    console.log("Event Emitted : Add User");
  }
}
