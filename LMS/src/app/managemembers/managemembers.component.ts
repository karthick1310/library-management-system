import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-managemembers',
  templateUrl: './managemembers.component.html',
  styleUrls: ['./managemembers.component.css']
})
export class ManagemembersComponent implements OnInit {
  members:any;
searchtext:string="";

id:number=0;
message:boolean=false;
  constructor(private service:UserService) { }
 editmembersform=new FormGroup({
  name:new FormControl(''),
  proffession:new FormControl(''),
  phno:new FormControl(''),
  age:new FormControl(''),
  gender:new FormControl('')
 })


  ngOnInit() {

    this.service.getmembers().subscribe(data=>
      {
        this.members=data;


      })

  }
  updatemembers(){

    this.service.updatesmemberdata(this.id,this.editmembersform.value).subscribe((data)=>{
      console.log(data)
    })
    this.ngOnInit();
    this.message=true;
  }
  deletemember(id:any){
    this.service.deletemember(id).subscribe(data=>{
      console.log(data)
      this.ngOnInit();
    })

  }
  editmember(id:any){
    console.log(id)
    this.id=id;
    this.service.getmemberbyid(id).subscribe(  (data:any)=>{
       console.log(data)
       this.editmembersform=new FormGroup({
        name:new FormControl(data['name']),
        proffession:new FormControl(data['proffession']),
        phno:new FormControl(data['phno']),
        age:new FormControl(data['age']),
        gender:new FormControl(data['gender'])
       })

    })


}
  removemessage(){
    this.message=false;
  }



}
