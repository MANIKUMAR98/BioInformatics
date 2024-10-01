import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtienViewerComponent } from './protien-viewer.component';

describe('ProtienViewerComponent', () => {
  let component: ProtienViewerComponent;
  let fixture: ComponentFixture<ProtienViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtienViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtienViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
