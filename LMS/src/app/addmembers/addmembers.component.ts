import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { FormStyle } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addmembers',
  templateUrl: './addmembers.component.html',
  styleUrls: ['./addmembers.component.css']
})
export class AddmembersComponent implements OnInit {
  name:string="";
  profession:string="";
  phone:string="";
  age:number=0;
  gender:string="";
  message:boolean=false;
  getvalues(form:NgForm)
  {
    console.log(form.value);
     let details={
     name: form.value.name,
      proffession:form.value.profession,
      phno:form.value.phone,
      age:form.value.age,
      gender:form.value.gender
     };
     console.log(details);
    this.service.addservice(details).subscribe(data=>{
         console.log(data);
    }, (err)=>{
      console.log("unable to load data"+err)
    });
    this.message=true;
    form.reset();
  }
  constructor(private service:UserService) { }

  ngOnInit() {
  }
  clearmessage(){
    this.message=false;
  }

}
