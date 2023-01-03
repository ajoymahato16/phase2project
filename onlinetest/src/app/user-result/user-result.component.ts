import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit {
  attemptedQes:any;
  RightAns:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
      this.attemptedQes = sessionStorage.getItem("AttemptedQest");
      this.RightAns =  sessionStorage.getItem("RightAns");
  }
  returnbtn()
  {
    const navigationDetails: string[] = ['login'];
    this.router.navigate(navigationDetails);
  }
}
