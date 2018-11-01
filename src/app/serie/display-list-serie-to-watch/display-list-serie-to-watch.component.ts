import { Component, OnInit } from '@angular/core';
/** Mocked serie  to watch */
const serieToWatch = {
  title: 'Breaking Bad',
  pictureUrl: 'assets/image/breaking_bad.jpg',
  creators: 'Vince Gilligan',
  releaseYear: 2010,
  genre: 'Drame, Policier, Thriller',
  seasons: 5,
  websiteUrl: 'http://www.amctv.com/shows/breaking-bad',
  synopsis: 'Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour subvenir aux besoins de Skyler, sa femme enceinte, et de Walt Junior, son fils handicapé, il est obligé de travailler doublement. Son quotidien déjà morose devient carrément noir lorsqu\'il apprend qu\'il est atteint d\'un incurable cancer des poumons. Les médecins ne lui donnent pas plus de deux ans à vivre. Pour réunir rapidement beaucoup d\'argent afin de mettre sa famille à l\'abri, Walter ne voit plus qu\'une solution : mettre ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth, une drogue de synthèse qui rapporte beaucoup. Il propose à Jesse, un de ses anciens élèves devenu un petit dealer de seconde zone, de faire équipe avec lui. Le duo improvisé met en place un labo itinérant dans un vieux camping-car. Cette association inattendue va les entraîner dans une série de péripéties tant comiques que pathétiques.'
};

/**
 * This component displays the series list that the current user wants to see
 */
@Component({
  selector: 'app-display-list-serie-to-watch',
  templateUrl: './display-list-serie-to-watch.component.html',
  styleUrls: ['./display-list-serie-to-watch.component.css']
})
export class DisplayListSerieToWatchComponent implements OnInit {

  /** The serie to display */
  serie: any;

  constructor() { }

  /** Whenever one needs to initialize component properties */
  ngOnInit() {
    this.serie = serieToWatch;
  }


}
