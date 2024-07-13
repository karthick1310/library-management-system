import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-issue-return',
  templateUrl: './issue-return.component.html',
  styleUrls: ['./issue-return.component.css'],
})
export class IssueReturnComponent implements OnInit  {
  failedmessage: boolean = false;
  successmessage: boolean = false;
  returnsuccessmessage: boolean = false;
  nobooks:boolean=false;

  check:any;
  check2:any;

  constructor(private service: UserService) {}
  issueform = new FormGroup({
    bookid: new FormControl(''),
    memberid: new FormControl(''),
  });

  memberid = this.issueform.value.memberid;
  bookid = this.issueform.value.bookid;
  returnform = new FormGroup({
    bookid: new FormControl(''),
    memberid: new FormControl(''),
  });
  returnbookid: any;
  returnmemberid: any;
  editbooksform = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    quantity: new FormControl(''),
    availablebooks: new FormControl(''),
    row: new FormControl(''),
    coloumn: new FormControl(''),
  });
  id: any;
  quantity: any;
  availablebooks: any;
  membername: any = '';
  phno: any;
  bookname: any;
  dueoriginaldate: any;
  mem:any;
  memid:any;
  successmember:boolean=false;
  successbook:boolean=false;

  books:any;
  ngOnInit(){

  }

  issuebooks() {

    this.id = this.issueform.value.bookid;
    this.memid=this.issueform.value.memberid



    this.service.getbooksbyid(this.id).subscribe((data: any) => {
    let nobooks=  true;
      if (data['availablebooks'] == 0) {
        this.failedmessage = true;
        this.issueform.reset();
      } else {
        const d = new Date();
        this.availablebooks = data['availablebooks'] - 1;
        this.bookname = data['title'];
        this.editbooksform = new FormGroup({
          title: new FormControl(data['title']),
          author: new FormControl(data['author']),
          quantity: new FormControl(data['quantity']),
          availablebooks: new FormControl(this.availablebooks),
          row: new FormControl(data['row']),
          coloumn: new FormControl(data['coloumn']),
        });

        this.service
          .updatesbooksdata(this.id, this.editbooksform.value)
          .subscribe((data) => {});
        this.successmessage = true;

        const adddays=(date:any,period:any)=>{
          date.setDate(date.getDate()+period);
         }
         let date=new Date();

         let todaydate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
         adddays(date,7)

         let duedate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
         this.dueoriginaldate=date;

        let bookid=this.issueform.value.bookid;
        let memberid=this.issueform.value.memberid;
        this.service.getmemberbyid(this.issueform.value.memberid).subscribe(  (data:any)=>{

        let details={
          memberid:memberid,
          bookid:bookid,
          name:data['name'],
          phno:data['phno'],
          issueddate:todaydate,
          duedate:duedate,
          bookname:this.bookname,
          orgdate:this.dueoriginaldate
        }
        this.service.addissuedbooks(details).subscribe(data=>{
          console.log(data);
     }, (err)=>{
       console.log("unable to load data"+err)
     });


        })

        this.issueform.reset();

      }
    });




  }
  issuedbooks:any;
  noofissuedbooks:any=0;
  issuecheck:boolean=false;
  returnbooks() {
    this.id = this.returnform.value.bookid;
    this.returnmemberid = this.returnform.value.memberid;

    this.service.getbooksbyid(this.id).subscribe((data: any) => {


      this.availablebooks = data['availablebooks'] + 1;

      this.editbooksform = new FormGroup({
        title: new FormControl(data['title']),
        author: new FormControl(data['author']),
        quantity: new FormControl(data['quantity']),
        availablebooks: new FormControl(this.availablebooks),
        row: new FormControl(data['row']),
        coloumn: new FormControl(data['coloumn']),
      });

      this.service
        .updatesbooksdata(this.id, this.editbooksform.value)
        .subscribe((data) => {

        });

      this.returnform.reset();
    });


    // console.log(this.id);
    // console.log(this.returnmemberid);
    console.log(this.returnform.value.bookid);
    console.log(this.returnform.value.memberid);
    this.service.getissuedbooks().subscribe(data=>
      {
        this.issuedbooks=data;
        for(let books of this.issuedbooks)
        {
           if(this.id==books['bookid']&&this.returnmemberid==books['memberid']){
            console.log("enterd")
            this.service.deleteissuedbooks(books['id']).subscribe(data=>{
              this.returnsuccessmessage = true;

            })

            break;


           }
           console.log(this.returnsuccessmessage)
           if(this.returnsuccessmessage==false){
             this.issuecheck=true;
           }
           this.noofissuedbooks = this.noofissuedbooks+1;

            // console.log(books['name']);

        }

      })

  }

  clearmessage() {
    this.failedmessage = false;
    this.successmessage = false;
    this.returnsuccessmessage = false;
    this.issuecheck=false;
  }

}
