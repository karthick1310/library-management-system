import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
books:any;
searchtext:string="";
id:number=0;

message:boolean=false;
  constructor(private service:UserService) { }
 editbooksform=new FormGroup({
  title:new FormControl(''),
  author:new FormControl(''),
  quantity:new FormControl(''),
  row:new FormControl(''),
  coloumn:new FormControl('')
 })
  ngOnInit() {

    this.service.getbooks().subscribe(data=>
      {
        this.books=data;


      })
  }
  deletebooks(id:any){
    this.service.deletebooks(id).subscribe(data=>{
      console.log(data)
      this.ngOnInit();
    })

  }
  editbooks(id:any){
    console.log(id)
    this.id=id;
    this.service.getbooksbyid(id).subscribe(  (data:any)=>{
       console.log(data)
       this.editbooksform=new FormGroup({
        title:new FormControl(data['title']),
        author:new FormControl(data['author']),
        quantity:new FormControl(data['quantity']),
        row:new FormControl(data['row']),
        coloumn:new FormControl(data['coloumn'])
       })

    })


}
updatebooks(){

  this.service.updatesbooksdata(this.id,this.editbooksform.value).subscribe((data)=>{
    console.log(data)
  })
  this.ngOnInit();
  this.message=true;
}
removemessage(){
  this.message=false;
}
}
