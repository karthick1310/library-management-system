import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  members:any;
searchtext:string="";

id:number=0;
message:boolean=false;
  constructor(private service:UserService) { }



  ngOnInit() {

    this.service.getrequestmember().subscribe(data=>
      {
        this.members=data;


      })

  }
  acceptmember(id:any){
    console.log(id)
    this.id=id;
    this.service.getrequestmemberbyid(id).subscribe(  (data:any)=>{
       console.log(data)

       let details={
        name: data['name'],
         proffession:data['proffession'],
         phno:data['phno'],
         age:data['age'],
         gender:data['gender']
        };
        console.log(details);
        this.service.addservice(details).subscribe(data=>{
             console.log(data);
        }, (err)=>{
          console.log("unable to load data"+err)
        });
        this.service.deleterequestmember(id).subscribe(data=>{
          console.log(data)
          this.ngOnInit();
        })

    })


}

  deletemember(id:any){
    this.service.deleterequestmember(id).subscribe(data=>{
      console.log(data)
      this.ngOnInit();
    })

  }

  removemessage(){
    this.message=false;
  }




}
