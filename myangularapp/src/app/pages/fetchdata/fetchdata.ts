import { CommonModule } from '@angular/common';
import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmojiPipe } from '../../emoji-pipe';
@Component({
  selector: 'app-fetchdata',
  imports: [CommonModule, EmojiPipe],
  templateUrl: './fetchdata.html',
  styleUrl: './fetchdata.css',
})
export class Fetchdata implements OnInit {

  title = ('Welcome to ')
  users:any [] = []
  constructor(private http: HttpClient , private cdr:ChangeDetectorRef){}
  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe((response)=>{
      this.users = response
      this.cdr.detectChanges()
    })
  }

}
