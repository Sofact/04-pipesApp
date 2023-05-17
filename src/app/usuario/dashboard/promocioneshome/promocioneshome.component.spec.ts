import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocioneshomeComponent } from './promocioneshome.component';

describe('PromocioneshomeComponent', () => {
  let component: PromocioneshomeComponent;
  let fixture: ComponentFixture<PromocioneshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocioneshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromocioneshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
