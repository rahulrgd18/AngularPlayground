import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavComponentComponent } from './mobile-nav-component.component';

describe('MobileNavComponentComponent', () => {
  let component: MobileNavComponentComponent;
  let fixture: ComponentFixture<MobileNavComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
