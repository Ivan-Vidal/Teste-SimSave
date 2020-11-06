import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service'
import {NgForm} from '@angular/forms'
import { Products } from '../models/products'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

erro: any;
  constructor( private homes:HomeService) {
    this.getFun()
   }
  products: any = [];
  inscricao: Subscription;
  ngOnInit() {
      
      
  }

  private getFun(){
    //this.incricao = this.homes.getDatas().subscribe(obj =>  console.log(obj));
    this.homes.getDatas().subscribe((obj :any) => { this.products = obj
      console.log(this.products) 
    },
     (error:any) => {
      this.erro = error
    }
    
    )   
    
  }
}