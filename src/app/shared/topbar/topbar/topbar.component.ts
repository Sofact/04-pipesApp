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
  role: boolean = false;
  ruta: string = '';

  ngOnInit(): void {

    this.user = this.authService.getUser();
    this.id = this.authService.getId();

    if(this.authService.getRole()== '1'){
    
      console.log("verdaero");
      this.ruta = '/dashboard';
    }
    else{
      this.ruta = '/userDashboard';
    }
   
    console.log(this.user);
    console.log(this.role);
  }

  logout(){
   this.authService.logoutClientes();
  }

}
