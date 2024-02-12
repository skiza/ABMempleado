import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrl: './form-empleado.component.css',
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class FormEmpleadoComponent {
  estadoCivilList: any[];
  empleadoForm!: FormGroup;

  constructor(private fb:FormBuilder, 
              private _empleadoService:EmpleadoService, 
              private router: Router ){
    this.estadoCivilList = [
      {value:'soltero', viewValue: 'Soltero'},
      {value:'casado', viewValue: 'Casado'},
    ]

    this.empleadoForm = this.fb.group({
      nombreCompleto:[''],
      telefono:[''],
      correo:[''],
      fechaIngreso:[''],
      estadoCivil:[''],
      sexo:[''],
    });
  }

  guardarEmpleado(){
    const EMPLEADO:Empleado = {
      nombreCompleto:this.empleadoForm.get('nombreCompleto')?.value,
      telefono:this.empleadoForm.get('telefono')?.value,
      correo:this.empleadoForm.get('correo')?.value,
      fechaIngreso:this.empleadoForm.get('fechaIngreso')?.value,
      estadoCivil:this.empleadoForm.get('estadoCivil')?.value,
      sexo:this.empleadoForm.get('sexo')?.value,
    }

    this._empleadoService.addEmpleado(EMPLEADO)

    this.router.navigate(['/'])
  }
}
