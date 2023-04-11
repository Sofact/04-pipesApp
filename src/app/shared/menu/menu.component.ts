import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'

})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];



  ngOnInit(): void {
    this.items = [
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        items: [
            {
              label: 'Comisiones',
              icon: 'pi pi-wallet',
              routerLink: '../comision'
            },
            {
              label: 'Convenios',
              icon: 'pi pi-shopping-bag',
              routerLink: '../grupos'
            },
            
            {
              label: 'Objetivos',
              icon: 'pi pi-star',
              routerLink: 'objetivos'
            }
          ]
      },
      {
        label: 'Dasboard',
        icon: 'pi pi-desktop',
        items: [
            {
              label: 'Afiliados',
              icon: 'pi pi-users',
              routerLink: '/basicos'
            },
            {
              label: 'Ventas',
              icon: 'pi pi-shopping-bag',
              routerLink: '/numeros'
            },
            
            {
              label: 'Pagos',
              icon: 'pi pi-dollar',
              routerLink: '/pagos'
            }
          ]
      },
      { 
        label: 'Administración',
        icon: 'pi pi-globe',
        items: [
          {
            label: 'Usuarios',
            icon: 'pi pi-user ',
            routerLink: 'ordenar'
          },
          {
            label: 'Codificación',
            icon: 'pi pi-prime',
            routerLink: '/codificacion'
          },
          
          {
            label: 'Parametros',
            icon: 'pi pi-cog',
            routerLink: '/parametros'
          }
        ]
    }
  ];
}
}
