import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, subscribeOn } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ConvenioService } from 'src/app/services/convenio.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { UsersService } from 'src/app/services/users.service';
import { Municipio } from 'src/app/shared/models/Municipio';
import { User } from 'src/app/shared/models/User';
import { Convenio } from 'src/app/shared/models/convenio';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
  
})
export class RegisterComponent implements OnInit{

  user: User= {
                id: 0,
                username: '',
                email: '',
                password: '',
                convId: 0, 
                role: 'admin',
                munId: 0,
                cliBanco: '',
                cliTipoCuenta: '',
                cliNumCuenta: ''
              }
  
    banco:any=[{
                id: 1,
                nombre: 'Bancolombia'
                },
                {
                  id: 2,
                  nombre: 'Davivienda'
                  }
    ]
    tipoCuenta:any=[{
                      id: 1,
                      nombre: 'Corriente'
                    },
                    {
                      id: 2,
                      nombre: 'Ahorros'
                      }
    ]
    municipio:any=[{
                          id: 1,
                          nombre: 'Bogotá'
                        },
                        {
                          id: 2,
                          nombre: 'Medellin'
                          },
                          {
                            id: 3,
                            nombre: 'Bucaramanga'
                            }
                    ]

                    cities!: Municipio[] 
                  
                    filteredCities: Municipio[] = [];
                  
                    cityControl = new FormControl();
                  
                  
  selectedConvenio!: Convenio;
  selectedBanco: any; 
  selectedCuenta: any; 
  selectedMunicipio: any;

  convenio!: Convenio [];

  miFormularioRegistro: FormGroup = this.fb.group(
    {
      nombreReg: ['', [Validators.required, Validators.minLength(4)]],
      emailReg: ['', [Validators.required, Validators.email]],
      passwordReg: ['', [Validators.required, Validators.minLength(6)]],
      convenioReg: ['', [Validators.required]],
      bancoReg: ['', [Validators.required]],
      tcuentaReg: ['', [Validators.required]],
      numeroReg: ['', [Validators.required]],
      municipioReg: ['',  [Validators.required]]
    }
  )
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private convenioService: ConvenioService,
              private municipioService: MunicipioService,
              private router: Router) { }

  ngOnInit(): void {

    this.municipioService.getMunicipios()
    .subscribe((response)=>{
    
      this.cities = response;
    })

    this.convenioService.getConvenios() 
    .subscribe ((respuesta) => {
      console.log(respuesta);
      this.convenio = respuesta;      
    }) 



              }
 
  registrar(){

        console.log("registrando", this.miFormularioRegistro.value.municipioReg.munId);
      
        this.user.username = this.miFormularioRegistro.value.emailReg;
        this.user.email =  this.miFormularioRegistro.value.nombreReg;
        this.user.password = this.miFormularioRegistro.value.passwordReg;
        this.user.convId = Number(this.miFormularioRegistro.value.convenioReg.covId);
        this.user.munId = Number(this.miFormularioRegistro.value.municipioReg.munId);
        this.user.cliBanco = this.miFormularioRegistro.value.bancoReg.nombre;
        this.user.cliTipoCuenta = this.miFormularioRegistro.value.tcuentaReg.nombre;
        this.user.cliNumCuenta = this.miFormularioRegistro.value.numeroReg;

      this.authService.saveUser(this.user).subscribe((mensaje)=>{
      
        console.log(mensaje)
        this.router.navigate(['./auth/loginCliente']);

      })
  }
  
  filterCities(event: any) {
    const query = event.query;
    this.filteredCities = this.cities.filter(city => city.munDescripcion.toLowerCase().includes(query.toLowerCase()));
  }


}
