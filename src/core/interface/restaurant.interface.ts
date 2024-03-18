export interface Inventory {
  type: string;
  properties: {
    pname: string;
    status: string;
    area_unit: string;
    area: number;
    price: number;
    facing: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][][];
  };
}