import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { LIST } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes():Observable<Hero[]> {
    this.messageService.add('HeroService: fetched names');
    return of(LIST);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched name id=${id}`);
    return of(LIST.find( detail => detail.id === id));
  }

 
}
