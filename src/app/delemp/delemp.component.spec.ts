import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelempComponent } from './delemp.component';

describe('DelempComponent', () => {
  let component: DelempComponent;
  let fixture: ComponentFixture<DelempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
