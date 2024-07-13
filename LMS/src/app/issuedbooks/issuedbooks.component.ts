import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-issuedbooks',
  templateUrl: './issuedbooks.component.html',
  styleUrls: ['./issuedbooks.component.css']
})
export class IssuedbooksComponent implements OnInit {

  books:any;
  searchtext:string="";
  id:number=0;

  message:boolean=false;
    constructor(private service:UserService) { }

    ngOnInit() {

      this.service.getissuedbooks().subscribe(data=>
        {
          this.books=data;


        })

        
    }






}
