import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {User} from '../../User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public users: User[] = [];

  public formDetails: any = {
  name: '',
  email: '',
  mobile: '',
  about: '',
  gender: {
    male : '',
    female: ''
  }
  }

  ngOnInit(): void {
    // this.indicesData = JSON.parse(localStorage.getItem('user'));
    // console.log(JSON.parse(localStorage.getItem('user')!));
    
  }


  onSubmit() {
    // user = this.formDetails;
      // this.userAdd.emit(user);
      if(localStorage.getItem('data') === null || localStorage.getItem('data') == undefined) {
        const userData = [];
        userData.push(this.formDetails);
        console.log(userData, 'details from form compo');
      localStorage.setItem('data', JSON.stringify(userData));
      return ;
      }
      else{
        const userData = [];
        this.formDetails.name = 'Sumit',
        this.formDetails.gender = 'Male',
        this.formDetails.email = 'abc@email',
        this.formDetails.mobile = '2147198247',
        this.formDetails.about = 'lorem',
       
        userData.push(this.formDetails);
        console.log(userData, 'details from form compo');
        localStorage.setItem('data', JSON.stringify(userData));
      }
    
  }
  
  resetForm(user:User){
    this.resetForm(user);
  }


}
