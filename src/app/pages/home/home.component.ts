import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from 'src/app/model/Cards';
import { GameCard } from 'src/app/model/GameCard';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	urlToJson = 'assets/data/dados.json';
	games: GameCard[] = [];
	constructor(public http: HttpClient) {}

	ngOnInit(): void {
		this.http.get<any>(this.urlToJson).subscribe((response) => {
			const result: Cards = response;
			this.games = result.cards;
		});
	}
}
