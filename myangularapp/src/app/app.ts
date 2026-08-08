import { Component, Pipe, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './pages/header/header';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';
import { Fetchdata } from './pages/fetchdata/fetchdata';
import { LowerCasePipe , UpperCasePipe , TitleCasePipe , CurrencyPipe} from '@angular/common';
import { EmojiPipe } from './emoji-pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Fetchdata, LowerCasePipe,Navbar, UpperCasePipe, TitleCasePipe, CurrencyPipe, Home , EmojiPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 title =('Welcome to First Angular Class')
 money =(20)

 initialState:any = true

 count:number = 0

 Inc(){
  this.count = this.count+2
 }

 handleClick(){
  this.initialState = this.initialState?"Hello Welcome to Event Listeners and functions":"ghdvdsghfghcHAc"
 }

}
