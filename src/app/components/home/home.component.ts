import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private showText: boolean = false;
  private showNumber: boolean = false;
  private encounterNaam: string;
  private encounterId: number;

  constructor(
    private router: Router,
    private gameService: GameService
  ) { }

  ngOnInit() {
  }

  public onKeyForNew(event: KeyboardEvent) {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.encounterNaam = (<HTMLInputElement>event.target).value
      this.startNewGame(this.encounterNaam);
    }
  }

  public onKeyForExisting(event: KeyboardEvent) {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.encounterId = (<HTMLInputElement>event.target).valueAsNumber;
      this.startExistingGame(this.encounterId);
    }
  }

  startNewGame(value: string) {
    this.gameService.startNewGame(value);
  }

  startExistingGame(value:number){
    this.gameService.openEncounter(value);
  }

  showTextField() {
    this.showNumber = false;
    this.showText = !this.showText;
  }

  showNumberField() {
    this.showText = false;
    this.showNumber = !this.showNumber;
  }

}
