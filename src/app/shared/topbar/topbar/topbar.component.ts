import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(  private authService: AuthService) { }

  user: string | null = '';
  id: string | null='';

  ngOnInit(): void {

    this.user = this.authService.getUser();
    this.id = this.authService.getId();

    console.log(this.user);
  }

  logout(){
   this.authService.logoutClientes();
  }

}
