import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ListaBerardo';

  listaAlumnos = [ 'juan', 'alexis', 'adrian', 'franco', 'julieta' ];

  cantAlumnos: number = this.listaAlumnos.length;

  capacidad = 3;

}
