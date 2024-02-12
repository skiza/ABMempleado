import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[]   
  constructor() {
    this.listEmpleado = [
      {
        nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono: 3512335522,
        sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
      },
      {
        nombreCompleto: 'Rodrigo Aliaga', correo: 'raliaga@gmail.com',
        estadoCivil: 'Soltero', fechaIngreso: new Date('2019-05-25'), sexo: 'Masculino', telefono: 3512334422
      },
      {
        nombreCompleto: 'Maria Funes', correo: 'mfunes@gmail.com',
        estadoCivil: 'Casado', fechaIngreso: new Date('2020-04-27'), sexo: 'Femenino', telefono: 3512553322
      },
      {
        nombreCompleto: 'Lucrecia Juarez', correo: 'maria@gmail.com',
        estadoCivil: 'Soltero', fechaIngreso: new Date('2020-07-25'), sexo: 'Femenino', telefono: 3514665533
      },
      {
        nombreCompleto: 'Federico Gonzalez', correo: 'fgonzalez@gmail.com',
        estadoCivil: 'Soltero', fechaIngreso: new Date('2020-02-31'), sexo: 'Femenino', telefono: 1156688332
      },
      {
        nombreCompleto: 'Estefania Schutz', correo: 'eschutz@gmail.com',
        estadoCivil: 'Soltero', fechaIngreso: new Date('2020-01-31'), sexo: 'Femenino', telefono: 1156678679
      },
      {
        nombreCompleto: 'Maria Belen Arzu', correo: 'mbarzu@gmail.com',
        estadoCivil: 'Soltero', fechaIngreso: new Date('2020-01-31'), sexo: 'Femenino', telefono: 3512576589
      }
    ];    
  }

  getEmpleados(): Empleado[]{
    // devuelve una copia de empleados
    return this.listEmpleado.slice();
  }

  deleteEmpleado(index:number){
    this.listEmpleado.splice(index,1)
  }

  setEmpleado(index:number, empleado:Empleado){
    this.listEmpleado[index] = empleado
  }

  addEmpleado( empleado:Empleado){
    this.listEmpleado.unshift(empleado)
  }

}
