export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto extends CreateCatDto {}

export class ListAllEntities {
  limit: number;
}
