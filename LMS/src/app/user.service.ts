import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private service:HttpClient) { }

getmembers()
{
  return this.service.get("http://localhost:3000/members");
}
getbooks()
{
  return this.service.get("http://localhost:3000/books");
}
addservice(body:any){

  return this.service.post('http://localhost:3000/members',body)
}
addbookservice(body:any){

  return this.service.post('http://localhost:3000/books',body)
}
deletebooks(id:any){
  return this.service.delete('http://localhost:3000/books'+"/"+id)
}
getbooksbyid(id:any){
  return this.service.get('http://localhost:3000/books'+"/"+id)
}
updatesbooksdata(id:any,data:any){
  return this.service.put('http://localhost:3000/books'+"/"+id,data)
}
updatesmemberdata(id:any,data:any){
  return this.service.put('http://localhost:3000/members'+"/"+id,data)
}
getmemberbyid(id:any){
  return this.service.get('http://localhost:3000/members'+"/"+id)
}
deletemember(id:any){
  return this.service.delete('http://localhost:3000/members'+"/"+id)
}
getrequestmemberbyid(id:any){
  return this.service.get('http://localhost:3000/requests'+"/"+id)
}
isuserloggedin(){
  return !!localStorage.getItem('username');
}
addrequest(body:any){

  return this.service.post('http://localhost:3000/requests',body)
}
getrequestmember(){
  return this.service.get('http://localhost:3000/requests');
}
deleterequestmember(id:any){
  return this.service.delete('http://localhost:3000/requests'+"/"+id)
}

  addissuedbooks(body:any){

    return this.service.post('http://localhost:3000/issuedbooks',body)

  }
  addnameissuedbooks(body:any){

    return this.service.post('http://localhost:3000/issuedbooks',body)
  }
  getissuedbooks()
{
  return this.service.get("http://localhost:3000/issuedbooks");
}
getissuedbooksbyid(id:any){
  return this.service.get('http://localhost:3000/issuedbooks'+"/"+id)
}
deleteissuedbooks(id:any){
  return this.service.delete('http://localhost:3000/issuedbooks'+"/"+id)
}
}
