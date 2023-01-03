import { Component, OnInit } from '@angular/core';
import{ userData } from '../login.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users:any;
  constructor(private usersData:userData,private router : Router) { 
      usersData.user().subscribe((data) => 
      //  console.log(data)
        this.users = data
      );

  }
   
  loginform = new FormGroup({

    userid: new FormControl('', Validators.required),

    userpass: new FormControl('', Validators.required),

    // password: new FormControl('', [Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_]).{8,}$'), Validators.minLength(8), Validators.required])

  });

  ngOnInit(): void {

  }
  onSubmit():void
  {
    const navigationDetails: string[] = ['userTest'];
    this.router.navigate(navigationDetails);
  }

}
