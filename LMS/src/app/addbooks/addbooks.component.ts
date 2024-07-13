import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  message:boolean=false
  title:string="";
  author:string="";
  quantity:number=0;
  row:number=0;
  coloumn:number=0;
  getvalues(form:NgForm)
  {
    console.log(form.value);
     let details={
     title: form.value.title,
      author:form.value.author,
      quantity:form.value.quantity,
      availablebooks:form.value.quantity,
      row:form.value.row,
      coloumn:form.value.coloumn

     };
     console.log(details);
    this.service.addbookservice(details).subscribe(data=>{
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
    this.message=false
  }

}
