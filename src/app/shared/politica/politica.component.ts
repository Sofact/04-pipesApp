import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css']
})
export class PoliticaComponent implements OnInit {

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
