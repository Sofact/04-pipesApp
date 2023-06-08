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
                cliNumCuenta: '',
                userIdentificacion:''
              }
  
    banco:any=[{ id: 1,nombre: 'BAN100' },
               { id: 2,nombre: 'BANCAMIA S.A.' },
               { id: 2,nombre: 'BANCO AGRARIO' },
               { id: 2,nombre: 'BANCO AV VILLAS' },
               { id: 2,nombre: 'BANCO BBVA COLOMBIA S.A.' },
               { id: 2,nombre: 'BANCO CAJA SOCIAL' },
               { id: 2,nombre: 'BANCO COPERATIVO COOPCENTRAL' },
               { id: 2,nombre: 'BANCO DAVIVIENDA' },
               { id: 2,nombre: 'BANCO DE BOGOTA' },
               { id: 2,nombre: 'BANCO DE OCCIDENTE' },
               { id: 2,nombre: 'BANCO FALABELLA' },
               { id: 2,nombre: 'BANCO FINANDINA S.A. BIC' },
               { id: 2,nombre: 'BANCO GNB SUDAMERIS' },
               { id: 2,nombre: 'BANCO ITAU' },
               { id: 2,nombre: 'BANCO PICHINCHA S.A.' },
               { id: 2,nombre: 'BANCO POPULAR' },
               { id: 2,nombre: 'BANCO SANTANDER COLOMBIA ' },
               { id: 2,nombre: 'BANCO SERFINANZA ' },
               { id: 2,nombre: 'BANCO UNION antes GIROS' },
               { id: 2,nombre: 'BANCOLOMBIA ' },
               { id: 2,nombre: 'BANCOOMEVA S.A. ' },
               { id: 2,nombre: 'CFA COOPERATIVA FINANCIERA ' },
               { id: 2,nombre: 'CITIBANK' },
               { id: 2,nombre: 'COLTEFINANCIERA' },
               { id: 2,nombre: 'CONFIAR COOPERATIVA FINANCIERA' },
               { id: 2,nombre: 'COOFINEP COOPERATIVA FINANCIERA' },
               { id: 2,nombre: 'COTRAFA' },
               { id: 2,nombre: 'DALE' },
               { id: 2,nombre: 'DAVIPLATA' },
               { id: 2,nombre: 'IRIS' },
               { id: 2,nombre: 'LULO BANK' },
               { id: 2,nombre: 'MOVII.S.A.' },
               { id: 2,nombre: 'NEQUI' },
               { id: 2,nombre: 'RAPPIPAY' },
               { id: 2,nombre: 'SCOTIABANK COLPATRIA' }


                 

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
      emailReg: ['', [ Validators.email]],
      identReg: ['', [Validators.required]],
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

        console.log("registrando", this.miFormularioRegistro.value.identReg);
      
        this.user.username = this.miFormularioRegistro.value.emailReg;
        this.user.email =  this.miFormularioRegistro.value.nombreReg;
        this.user.userIdentificacion = this.miFormularioRegistro.value.identReg;
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
