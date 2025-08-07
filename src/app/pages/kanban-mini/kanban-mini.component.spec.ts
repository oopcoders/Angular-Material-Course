import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KanbanMiniComponent } from './kanban-mini.component';

describe('KanbanMiniComponent', () => {
  let component: KanbanMiniComponent;
  let fixture: ComponentFixture<KanbanMiniComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
