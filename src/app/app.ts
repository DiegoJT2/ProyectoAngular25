import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './elementos/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  template: `
      <app-menu
        [title] = "'Salesianos'"
        [menuItems] = "[
          {label: 'Inicio', link: '/', icono: 'fa fa-home'},
          {label: 'Alumno', link: '/alumno', icono: 'fa fa-user'},
          {label: 'Listado', link: '/alumno-lista', icono: 'fa fa-film'},
          {label: 'Insertar', link: '/alumno-insertar', icono: 'fa fa-pen'}
        ]"
      ></app-menu>
      <div class="container mt-4">
        <router-outlet></router-outlet>
      </div>
  `,
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'ProyectoAngular25';
}
