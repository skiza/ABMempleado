import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrl: './list-empleado.component.css'
})



export class ListEmpleadoComponent implements AfterViewInit , OnInit{
  displayedColumns: string[] = ['nombreCompleto','telefono','correo','fechaIngreso','estadoCivil','sexo', 'acciones']  
  empleados: Empleado[] = []
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator,{static:true}) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer, private _empleadoService: EmpleadoService , public dialog: MatDialog, private _snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    this.getEmpleados()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Items por pagina:'
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEmpleados(){
    this.empleados = this._empleadoService.getEmpleados()
    this.dataSource.data = this.empleados
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Items por pagina:'
    this.dataSource.sort = this.sort;
  }

  deleteEmpleado(index: number, name:string){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '250px',
      data: {mensaje: `Estás seguro de que deseas borrar al empleado ${name}?`},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(index)
      console.log(result)
      if(result == true){
        this._empleadoService.deleteEmpleado(index)
        this.getEmpleados()      
        this._snackBar.open('El empleado se borro correactamente','',{duration:20000})
      }
    });
  }

  editEmpleado(index: number){

  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
