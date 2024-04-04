import { IsNotEmpty, IsNumber, IsPositive, IsBoolean, IsDateString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  stock: number;

  @IsBoolean()
  isActive: boolean;

  @IsDateString()
  createdAt: string;
}
