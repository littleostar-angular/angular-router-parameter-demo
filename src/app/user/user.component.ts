import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    // this.username = this.activatedRoute.snapshot.params.username;
    this.activatedRoute.paramMap.subscribe(para => {
      this.username = para.get('username');
    });
  }

}
