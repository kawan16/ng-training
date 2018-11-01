import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
/** Mocked series */
const series = [
  {
    id: '1',
    title: 'Game of Thrones',
    pictureUrl: 'assets/image/game_of_throne.jpg',
    creators: 'David Benioff, D. B. Weiss',
    releaseYear: 2011,
    genre: 'Fantasy médiévale, Drame',
    seasons: 7,
    websiteUrl: 'https ://www.hbo.com/game-of-thrones',
    synopsis: 'Il y a très longtemps, à une époque oubliée, une force a détruit l\'équilibre des saisons. Dans un pays où l\'été peut durer plusieurs années et l\'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d\'au-delà du Mur protecteur, n\'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s\'abat sur le Royaume avec la promesse d\'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s\'emparer du Trône de Fer, le symbole du pouvoir absolu.'
  },
  {
    id: '2',
    title: 'The Walking Dead',
    pictureUrl: 'assets/image/the_walking_dead.jpg',
    creators: 'Franck Darabond',
    releaseYear: 2010,
    genre: 'Horreur, Drame',
    seasons: 9,
    websiteUrl: 'https://www.amc.com/shows/the-walking-dead',
    synopsis: 'Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, un groupe d\'hommes et de femmes mené par l\'officier Rick Grimes tente de survivre... Ensemble, ils vont devoir tant bien que mal faire face à ce nouveau monde devenu méconnaissable, à travers leur périple dans le Sud profond des États-Unis.'
  },
  {
    id: '3',
    title: 'Breaking Bad',
    pictureUrl: 'assets/image/breaking_bad.jpg',
    creators: 'Vince Gilligan',
    releaseYear: 2010,
    genre: 'Drame, Policier, Thriller',
    seasons: 5,
    websiteUrl: 'http://www.amctv.com/shows/breaking-bad',
    synopsis: 'Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour subvenir aux besoins de Skyler, sa femme enceinte, et de Walt Junior, son fils handicapé, il est obligé de travailler doublement. Son quotidien déjà morose devient carrément noir lorsqu\'il apprend qu\'il est atteint d\'un incurable cancer des poumons. Les médecins ne lui donnent pas plus de deux ans à vivre. Pour réunir rapidement beaucoup d\'argent afin de mettre sa famille à l\'abri, Walter ne voit plus qu\'une solution : mettre ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth, une drogue de synthèse qui rapporte beaucoup. Il propose à Jesse, un de ses anciens élèves devenu un petit dealer de seconde zone, de faire équipe avec lui. Le duo improvisé met en place un labo itinérant dans un vieux camping-car. Cette association inattendue va les entraîner dans une série de péripéties tant comiques que pathétiques.'
  }
];

/**
 * This component displays the details of a serie given an identifier in url
 */
@Component({
  selector: 'app-display-serie-details',
  templateUrl: './display-serie-details.component.html',
  styleUrls: ['./display-serie-details.component.css']
})
export class DisplaySerieDetailsComponent implements OnInit {

  /** The serie to display */
  serie: any;

  constructor( private _route: ActivatedRoute ) { }

  /** Whenever one needs to initialize component properties */
  ngOnInit() {
    this.assignSerieFromPath();
  }

  /** Assign the serie to display with the id included into the path */
  private assignSerieFromPath() {
    this._route.paramMap.subscribe( params => {
      const serieId = params.get( 'id' );
      this.serie = series.find( serie => serie.id == serieId );
    });
  }
}
