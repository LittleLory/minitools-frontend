import {Component, Input, OnInit} from '@angular/core';
import {Parameter} from './Bean';
import {Logger} from './log.service';
import {ToolService} from './tool.service';

@Component ({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html'
})

export class ToolBoxComponent implements OnInit {
  constructor(private log:Logger, private toolService:ToolService){}

  @Input()
  toolId: number = 0;
  toolName: string = "";
  parameters: Parameter[] = [];
  values: string[] = [];
  result: string = "";
  belongName: string = "";

  ngOnInit() {
    this.log.debug("toolId:" + this.toolId);
    this.toolService.getTool(this.toolId).then(result => {
      this.parameters = result.parameters;
      this.toolName = result.entryName;
      this.belongName = result.belongName;
    });
    this.values = new Array<string>(this.parameters.length);
  }

  invoke(): void {
    this.toolService.invoke(this.toolId, this.values).then(result => this.result = result);
  }
}
