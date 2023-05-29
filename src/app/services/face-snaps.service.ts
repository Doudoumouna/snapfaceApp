import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Romantico',
      description: 'Mein bestes essen-restaurant  seit dem ich klein bin!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/11/11/christmas-791110_1280.jpg',
      createdDate: new Date(),
      snaps: 8,
      location: 'Paris',
    },

    {
      id: 2,
      title: 'lass uns zusammen kochen',
      description: 'Mein bester Freund seit dem ich klein bin!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/05/24/13/29/olive-oil-1412361_960_720.jpg',
      createdDate: new Date(),
      snaps: 350,
      location: 'Piemonte',
    },

    {
      id: 3,
      title: 'Entspannung',
      description: 'Mein bester Freund seit dem ich klein bin!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/04/08/22/26/buddhism-2214532_960_720.jpg',
      createdDate: new Date(),
      snaps: 4,
    },

    {
      id: 4,
      title: 'Mein Rezept',
      description: 'Mein bester Freund seit dem ich klein bin!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_1280.jpg',
      createdDate: new Date(),
      snaps: 8,
      location: 'Paris',
    },

    {
      id: 5,
      title: 'Geiles Essen',
      description: 'Mein bester Freund seit dem ich klein bin!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/11/18/17/09/strawberries-2960533_1280.jpg',
      createdDate: new Date(),
      snaps: 80,
      location: 'Piemonte',
    },

    {
      id: 6,
      title: 'ragu-zutaten',
      description: 'Einfach gemacht, aber verdammt lecker!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_1280.jpg',
      createdDate: new Date(),
      snaps: 200,
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
