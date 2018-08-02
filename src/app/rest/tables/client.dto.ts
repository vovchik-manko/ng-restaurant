export class ClientDto {
  id: number;
  name: string;

  constructor(d?: ClientDto) {
    if(d) {
      this.id = d.id;
      this.name = d.name;
    }
  }
}
