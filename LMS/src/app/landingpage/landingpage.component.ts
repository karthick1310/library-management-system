import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  message:boolean=false;
  constructor(private service:UserService) { }
  addmembersform=new FormGroup({
    name:new FormControl(''),
    proffession:new FormControl(''),
    phno:new FormControl(''),
    age:new FormControl(''),
    gender:new FormControl('')
   })
   getvalues()
   {
     console.log(this.addmembersform.value);
      let details={
      name: this.addmembersform.value.name,
       proffession:this.addmembersform.value.proffession,
       phno:this.addmembersform.value.phno,
       age:this.addmembersform.value.age,
       gender:this.addmembersform.value.gender
      };
      console.log(details);
      this.service.addrequest(details).subscribe(data=>{
           console.log(data);
      }, (err)=>{
        console.log("unable to load data"+err)
      });
      this.message=true;
      this.addmembersform.reset();
    }
    clearmessage(){
      this.message=false;
    }
  ngOnInit() {
  }

}
