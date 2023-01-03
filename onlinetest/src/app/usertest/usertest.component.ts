import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { Component, OnInit,OnDestroy,Input } from '@angular/core';
import { questionSet} from '../question.service'
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usertest',
  templateUrl: './usertest.component.html',
  styleUrls: ['./usertest.component.scss']
})
export class UsertestComponent implements OnInit, OnDestroy {

    questions : any;
    answerCounter:number = 0;
    atmpt:number = 0;
    status: boolean = false;
    countDown : any = Subscription;
    counter = 1800;
    tick = 1000;
    
    constructor(private questionsSet: questionSet, private router:Router) { 
      questionsSet.getQuestion().subscribe((data) => this.questions = data)
    }

    OnlineTestForm = new FormGroup({

    });

    ngOnInit() {      
      this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
      
      
    }

    ngOnDestroy(){
      this.countDown = null;
      
    }


    onSubmit():void
    {
      const navigationDetails: string[] = ['userResult'];
      this.router.navigate(navigationDetails);
      
    }

    onItemChange(e:any,i:number){
      
     // console.log(" Value is : ", e.target.value );
     // console.log(" ans is : ",this.questions[i].ans)
      this.atmpt = this.atmpt + 1;

      if(e.target.value == this.questions[i].ans)
      {
        this.answerCounter = this.answerCounter + 1;
        this.status = !this.status; 
      }
      
      console.log(this.answerCounter);
      let AttemptedQest:any = this.atmpt;
      let RightAns:any = this.answerCounter;
      sessionStorage.setItem("AttemptedQest", AttemptedQest);
      sessionStorage.setItem("RightAns", RightAns);
      
   }

      
   
}

@Pipe({
  name: "formatTime"
})

export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 20)).slice(-2)
    );
  }
}

