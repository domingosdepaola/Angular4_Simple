import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  itens: any[];
  constructor(private userService: UserService){
    this.itens = [];
  }
  ngOnInit() {
     this.userService.get().subscribe(data => {
       this.itens = data;
     });
  }
}