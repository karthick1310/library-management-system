import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,private http:HttpClient ,private router:Router) {}
  login = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.compose([Validators.required])),
  });
  id:any="";
  name:string=""
  reset()
  {
    this.login.reset();
  }

  ngOnInit() {

  }
  loginn(){
    this.http.get<any>("http://localhost:3000/login").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.username===this.login.value.username && a.password===this.login.value.password
      });

       if(this.login.value.username=="karthick1310" &&this.login.value.password=="karthicks1310"){
        sessionStorage.setItem("username",this.login.value.username)
        sessionStorage.setItem("id",this.id);
        alert(" login succesfull");
        this.router.navigate(['person']);


      }
      else if(user){

          alert("Admin Login Success");

          localStorage.setItem('username',this.login.value.username??'')
          this.login.reset();
          this.router.navigate(['home']);
        
      }
      else{
        alert("User not found");
      }
    })
  }
}
