import {Component, Input, OnInit} from '@angular/core';
import {ToolService} from './tool.service';

@Component({
  selector: 'tool-board',
  templateUrl: './tool-board.component.html'
})

export class ToolBoardComponent implements OnInit {
  @Input()
  private showType: number;
  toolIds: number[] = [];

  constructor(private toolService:ToolService) {}

  ngOnInit() {
    this.toolService.getToolIds().then(result => this.toolIds = result);
  }
}
