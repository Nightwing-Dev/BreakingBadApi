import { Component, OnInit } from '@angular/core';
import { BreakingBadCharacters } from './interfaces/bb-interface';
import { BbApiService } from './services/bb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  characters!: BreakingBadCharacters[];

  constructor(private bb: BbApiService) { }

  ngOnInit(): void {
    this.getAllBreakingbad();
  }

  getAllBreakingbad() {
    this.bb.getAllCharacters().subscribe({
      next: (res) => {
        //console.table(res);
        this.characters = res.map(({ char_id, name, occupation, img, status }: BreakingBadCharacters) => {
          return {
            char_id: char_id,
            name: name,
            occupation: occupation,
            img: img,
            status: status
          }
        });
      }
    });
  }
}
