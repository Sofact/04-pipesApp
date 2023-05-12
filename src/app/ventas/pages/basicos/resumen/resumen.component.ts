import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MapUser } from 'src/app/shared/models/MapUser';
import { Convenio } from 'src/app/shared/models/convenio';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html'
})
export class ResumenComponent implements OnInit {

    users: MapUser[]=[];
    user: MapUser= {
                          username: '',
                          email: '',
                          suma: 0
  
                      };
  
    constructor (
                private usersService: UsersService
      ){
    }
  
    ngOnInit(): void {
  
      this.usersService.getUser()
      .subscribe( (response) => {
      this.users = response;
      console.log(response);
    });
  
  }
  
}
