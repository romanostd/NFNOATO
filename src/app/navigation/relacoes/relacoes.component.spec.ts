import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacoesComponent } from './relacoes.component';

describe('RelacoesComponent', () => {
  let component: RelacoesComponent;
  let fixture: ComponentFixture<RelacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
