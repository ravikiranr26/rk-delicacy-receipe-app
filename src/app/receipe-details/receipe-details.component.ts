import { Component, OnInit, OnDestroy} from '@angular/core';
import { ReceipeService } from '../service/receipe.service';
import { Receipe } from '../interface/receipe.interface';
import { Router, NavigationEnd} from '@angular/router';
import { DataService} from '../service/details.service';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit, OnDestroy {
  receipedetails: Receipe[];
  recDetaildata: any;
  public href: String = '';
  navigationSubscription;

  constructor(private router: Router, private details: DataService, private receipeService: ReceipeService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        if (e.id === 1) {
          this.initialiseReceipeDetails(e.url.split('/')[2]);
        }
      }
    });
  }

  initialiseReceipeDetails(couparam) {
    this
    .receipeService
    .getReceipeDetails(couparam)
    .subscribe((data: Receipe[]) => {
      this.recDetaildata = data;
    });
  }

  ngOnInit() {
    this.recDetaildata = this.details.receipe;
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves.
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }

}
