import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTabsModule} from '@angular/material';
import { ReceipeDetailsComponent } from './receipe-details.component';
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReceipeDetailsComponent', () => {
  let component: ReceipeDetailsComponent;
  let fixture: ComponentFixture<ReceipeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeDetailsComponent ],
      imports: [MatTabsModule, RouterModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
