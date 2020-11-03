import { Component, OnInit, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { Episodes } from 'app/models/Episodes';
import { EpisodeService } from 'app/shared/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes: Episodes;
  episodeList: string[] = [];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {

    this.episodeService.getAll().subscribe(data => {
      this.episodes = data;
      for (const key in this.episodes) {
        if (Object.prototype.hasOwnProperty.call(this.episodes, key)) {
          const element = this.episodes[key];
          this.episodeList.push(element);
        }
      }
    });
  }

}
