import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexTagComponent } from './pokedex-tag.component';

describe('PokedexTagComponent', () => {
  let component: PokedexTagComponent;
  let fixture: ComponentFixture<PokedexTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
