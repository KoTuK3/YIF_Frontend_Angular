import { Component, Input, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Point from 'ol/geom/Point';
import { Feature } from 'ol';
import Layer from 'ol/layer/Layer';
import Vector from 'ol/source/Vector';
import VectorSource from 'ol/source/Vector';

@Component({
  selector: 'app-university-map',
  templateUrl: './university-map.component.html',
  styleUrls: ['./university-map.component.scss']
})
export class UniversityMapComponent implements OnInit {

  constructor() { }

  map: Map | undefined;

  @Input() lat = 0; 
  @Input() lon = 0; 

  ngOnInit(): void {
    var university = new Feature({
      geometry: new Point(olProj.fromLonLat([this.lon, this.lat]))
    })

    university.setStyle(new Style({
      image: new Icon(({
        color: '#ec615b',
        crossOrigin: 'anonymous',
        src: '../assets/marker.svg',
        imgSize: [30, 30],
        anchor: [0.5, 1]
      }))
    }))

    var vectorSource = new VectorSource({
      features: [university]
    })

    this.map = new Map({
      target: 'university_map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        new VectorLayer({
          source: vectorSource
        })
      ],
      view: new View({
        center: olProj.fromLonLat([this.lon, this.lat]),
        zoom: 15
      })
    });
  }

}
