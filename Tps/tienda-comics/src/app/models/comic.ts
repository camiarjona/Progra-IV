export class Comic {

  public id: number;

  constructor(
    public titulo: string,
    public editorial: string,
    public anio: number,
    public precio: number,
    public imgUrl: string,
    id?: number
  ) {
    this.id = id ?? Date.now();
    //nullish coalescing operator ?? (si id es null o undefined, asigna Date.now())
  }
}
