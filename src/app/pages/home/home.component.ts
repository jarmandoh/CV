import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	frase:any = ''

	constructor(private https: HttpClient) { }

	ngOnInit(): void {
		this.getFrase()
	}
	
	getFrase(){
		this.https.get('https://frasedeldia.azurewebsites.net/api/phrase').subscribe( (ladata: any) => {
			this.frase = ladata
		})
	}

}
