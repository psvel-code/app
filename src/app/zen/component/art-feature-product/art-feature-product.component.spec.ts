import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtFeatureProductComponent } from './art-feature-product.component';

describe('ArtFeatureProductComponent', () => {
  let component: ArtFeatureProductComponent;
  let fixture: ComponentFixture<ArtFeatureProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtFeatureProductComponent]
    });
    fixture = TestBed.createComponent(ArtFeatureProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
