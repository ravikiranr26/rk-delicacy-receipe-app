import { Component, OnInit } from '@angular/core';
import { Receipe } from '../interface/receipe.interface';
import { ReceipeService } from '../service/receipe.service';
import { Router } from '@angular/router';
import { DataService} from '../service/details.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  title = 'Rk Cooking simplified.';
  subTitle = 'The best recipe organizer for home cooks.';
  receipes: Receipe[];
  userFilter: any = { name: '' };

  constructor(private details: DataService, private router: Router,
    private receipeService: ReceipeService) {
  }

  ngOnInit() {
    this
    .receipeService
    .getAllReceipes()
    .subscribe((data: Receipe[]) => {
      this.receipes = data;
    });
  }
  navigateToDetails(receipeDetails) {
    this.details.receipe = receipeDetails;
    this.router.navigate(['/receipe-details/' + receipeDetails.country]);
  }
}
