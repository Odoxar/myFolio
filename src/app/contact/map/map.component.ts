import { Component, OnInit} from '@angular/core';
import { IndoorDataService } from '../../shared/services/indoor-data.service';


@Component({
  selector: 'dsa-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title: string = 'Mapping with Angular';
  lat: number = 50.4501;
  lng: number = 30.5234;
  zoom: number = 3;
  geoJsonObject: Object;


  constructor(private indoorDataService: IndoorDataService) { }

  getGeoJSON(): void {
    this.indoorDataService.getGeoJson()
    .subscribe(res => this.geoJsonObject = res);
  }

  ngOnInit() {
    this.getGeoJSON();
    
  }

  styleFunc() {
    // get level - 0/1
    let color = '#2574a9';
    // only show level one features
   

      return {
        // icon for point geometry(in this case - doors)
        //icon: 'assets/images/door.png',
        // set fill color for polygon features
        fillColor: "yellow",
        // stroke color for polygons
        strokeColor: color,
        strokeWeight: 1,
        // make layer 1 features visible
        visible: true
      };
    
  }
}
