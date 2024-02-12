import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';

const routes: Routes = [
  {path:'',component: ListEmpleadoComponent},
  {path:'add',component: FormEmpleadoComponent},
  {path:'edit/:id',component: FormEmpleadoComponent},
  {path:'**',component: ListEmpleadoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
