import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
constructor(private user:UserService){}
mem:any;
id:any;
message:boolean=false;
ngOnInit() {
  this.user.getmemberbyid(10).subscribe(  (data:any)=>{
    console.log(data)
    this.mem=data;
    console.log(this.mem);

    })


}
editmembersform=new FormGroup({
  name:new FormControl(''),
  proffession:new FormControl(''),
  phno:new FormControl(''),
  age:new FormControl(''),
  gender:new FormControl('')}



)
editmember(id:any){
  console.log(id)
  this.id=id;
  this.user.getmemberbyid(id).subscribe(  (data:any)=>{
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
updatemembers(){

  this.user.updatesmemberdata(this.id,this.editmembersform.value).subscribe((data)=>{
    console.log(data)
  })
  this.ngOnInit();
  this.message=true;
}

}
