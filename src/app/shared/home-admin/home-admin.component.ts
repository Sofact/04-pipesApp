import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(  private authService: AuthService) { }
  
  user: string | null = '';
  id: string | null='';

  ngOnInit(): void {

    this.user = this.authService.getUser();
    this.id = this.authService.getId();

    console.log(this.user);
  }

  logout(){
   this.authService.logout();
  }

}
