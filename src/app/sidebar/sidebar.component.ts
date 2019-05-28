import { Component } from '@angular/core';

@Component ({
	selector: 'sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
	public titulo: string;
	public listado: string;
	showFiller = false;
	
constructor(){
	this.titulo = "Componente Sidebar";
	console.log("Se ha cargado correctamente");
}

}
