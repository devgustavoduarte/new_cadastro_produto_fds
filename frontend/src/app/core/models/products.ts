export class Product {
  ID?: number;
  Name: string;
  Price: number;
  Type: string;
  EntryDate: string;
  DepartureDate: string;
  Destination: string;

  constructor(
    id: number = 0,
    name: string = '',
    price: number = 0,
    type: string = '',
    entryDate: string = '',
    departureDate: string = '',
    destination: string = ''
  ) {
    this.ID = id;
    this.Name = name;
    this.Price = price;
    this.Type = type;
    this.EntryDate = entryDate;
    this.DepartureDate = departureDate;
    this.Destination = destination;
  }
}
