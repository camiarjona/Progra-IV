export class Comic {

  public id: number;

  constructor(
    public titulo: string,
    public editorial: string,
    public anio: number,
    public precio: number,
    public imgUrl: string
  ) {
    this.id = Date.now();
  }
}
