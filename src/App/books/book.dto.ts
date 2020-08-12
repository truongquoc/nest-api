import { IsBoolean } from 'class-validator';

export class BookDTO {
  @IsBoolean()
  available: boolean;

  id: number;
}
