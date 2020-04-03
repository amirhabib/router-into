import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  id:string;

  constructor(private route:ActivatedRoute) {
    route.paramMap.subscribe( params => {

      this.id = params.get('id');

      console.log( this.id )
    })
  }

  ngOnInit() {
    console.log('Component B loaded')
  }

}
