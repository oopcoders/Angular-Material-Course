import { Component } from '@angular/core';
import { CdkDropListGroup, CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-mini',
  templateUrl: './kanban-mini.component.html',
  styleUrl: './kanban-mini.component.scss',
  imports: [CdkDropListGroup, CdkDrag, CdkDropList]
})
export class KanbanMiniComponent {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
  ];

  inProgress = [
    'Fall asleep'
  ]

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}