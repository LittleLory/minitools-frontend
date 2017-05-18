export class ParamType {
  constructor(
    public typeId: number,
    public name: string
  ){}
}

export class Parameter {
  constructor(
    public type: string,
    public name: string,
    public sort: number,
    public show: string
  ){}

  clean(): void {
    this.type = "";
    this.name = "";
    this.show = "";
    this.sort = 1;
  }

  copy():Parameter {
    return new Parameter(this.type, this.name, this.sort, this.show);
  }
}

export class Dependency {
  constructor(
    public groupId: string,
    public artifactId: string,
    public version: string
  ) {}

  clean(): void {
    this.groupId = "";
    this.artifactId = "";
    this.version = "";
  }

  copy():Dependency {
    return new Dependency(this.groupId, this.artifactId, this.version);
  }
}


export class AddToolForm {
  constructor(
    public entryName: string,
    public parameters: Parameter[],
    public dependencies: Dependency[],
    public code: string,
    public belongId: number,
    public isPublic: boolean
  ) {  }
}
