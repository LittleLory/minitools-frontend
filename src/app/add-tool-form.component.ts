import {Component} from '@angular/core';
import {AddToolForm,  Parameter, Dependency} from './Bean';
import {Logger} from './log.service';
import {ToolService} from './tool.service'

@Component({
  selector: 'add-tool-form',
  templateUrl: './add-tool-form.component.html'
})

export class AddToolFormComponent {
  constructor(
    private log: Logger,
    private toolService: ToolService
    ) { }

  paramTypes: string[];//参数类别下拉选项

  entryName: string;
  depTemp = new Dependency("", "", "");
  dependencies: Dependency[] = [];

  paramTemp = new Parameter("", "", 1, "");
  parameters: Parameter[] = [];
  code: string;
  belongId: number;
  isPublic: boolean;


  ngOnInit(): void {
    this.log.debug("init add tool form..");
    this.toolService.getParamTypes().then((result)=> this.paramTypes = result);
    // this.paramTypes = ["INT","STRING"];
  }

  addDependency(): void {
    this.dependencies.push(this.depTemp.copy());
    this.depTemp.clean();
    this.log.debug("depTemp:" + JSON.stringify(this.depTemp));
    this.log.debug("dependencies:" + JSON.stringify(this.dependencies));
    this.log.debug("dep size:" + this.dependencies.length);
  }

  removeDependency(index): void {
    this.dependencies.splice(index, 1);
    this.log.debug("dep size:" + this.dependencies.length);
  }

  addParameter(): void {
    this.parameters.push(this.paramTemp.copy());
    this.paramTemp.clean();
    this.log.debug("paramTemp:" + JSON.stringify(this.paramTemp));
    this.log.debug("parameters:" + JSON.stringify(this.parameters));

  }

  save(): void {
    this.log.debug("save...");
    let saveResult = {
      entryName: this.entryName,
      dependencies: this.dependencies,
      parameters: this.parameters,
      code: this.code,
      isPublic: this.isPublic
    }
    this.log.debug("save data: " + JSON.stringify(saveResult));
  }

  clickMe(): void {
    this.log.debug("click...");
  }
}
