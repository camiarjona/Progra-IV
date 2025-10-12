import { ComicService } from './../../services/comicService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comic-list',
  imports: [],
  templateUrl: './comic-list.html',
  styleUrl: './comic-list.css'
})
export class ComicList {
  constructor(private ComicService: ComicService){}
}
