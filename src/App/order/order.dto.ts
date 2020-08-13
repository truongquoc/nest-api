import { IsInt, IsString } from 'class-validator';

export class OrderDTO {
  @IsInt()
  id: number;
  @IsInt()
  quantity: number;
  @IsString()
  format: string;
}
