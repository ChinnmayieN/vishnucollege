import { Component , OnInit , ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit  {

   color='#1BDE39'
  isLoggedIn = false
users:any[]=[]

constructor(private http:HttpClient , private cdr:ChangeDetectorRef){}

ngOnInit(): void {
  this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
  .subscribe((response)=>{
    this.users = response
    this.cdr.detectChanges()
  })
}
}
