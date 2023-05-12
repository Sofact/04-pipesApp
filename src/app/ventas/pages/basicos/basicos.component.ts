import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MapUser } from 'src/app/shared/models/MapUser';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  implements OnInit{

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
