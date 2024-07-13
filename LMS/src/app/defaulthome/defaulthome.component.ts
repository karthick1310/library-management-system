import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-defaulthome',
  templateUrl: './defaulthome.component.html',
  styleUrls: ['./defaulthome.component.css']
})
export class DefaulthomeComponent implements OnInit {
  memcount=0;
  mem:any="";
  issuedbooks:any="";
  noofissuedbooks=0;
  noofbooks:number=0;
  books:any="";
  check:boolean=true;
  constructor(private service:UserService) {

   }

  ngOnInit() {
   let noofmem:number=0;
     this.service.getmembers().subscribe(data=>
      {
        this.mem=data;
        for(let mem of this.mem)
        {

           noofmem = noofmem+1;


        }
        this.memcount=noofmem;

      })
      this.service.getbooks().subscribe(data=>
        {
          this.books=data;
          for(let books of this.books)
          {

             this.noofbooks = this.noofbooks+books['quantity'];


          }

        })
        this.service.getissuedbooks().subscribe(data=>
          {
            this.issuedbooks=data;
            for(let books of this.issuedbooks)
            {

               this.noofissuedbooks = this.noofissuedbooks+1;


            }

          })



  }

}
