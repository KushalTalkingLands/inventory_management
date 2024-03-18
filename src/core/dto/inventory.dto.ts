export class CreateInventoryDto {
  readonly type: string;
  readonly properties: {
    pname: string;
    status: string;
    area_unit: string;
    area: number;
    price: number;
    facing: string;
  };
  readonly geometry: {
    type: string;
    coordinates: number[][][][];
  };
}