import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Mario',
      'Mein bester Freund seit dem ich klein bin!',
      'https://cdn.pixabay.com/photo/2016/07/30/21/12/luigi-1558026_960_720.jpg',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Geiles Essen',
      'Mein bester Freund seit dem ich klein bin!',
      'https://cdn.pixabay.com/photo/2016/05/24/13/29/olive-oil-1412361_960_720.jpg',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Entspannung',
      'Mein bester Freund seit dem ich klein bin!',
      'https://cdn.pixabay.com/photo/2017/04/08/22/26/buddhism-2214532_960_720.jpg',
      new Date(),
      0
    );
  }
}
