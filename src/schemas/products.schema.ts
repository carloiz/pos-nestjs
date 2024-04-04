// product.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty, IsNumber, IsPositive, IsBoolean, IsDate } from 'class-validator';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  @IsNotEmpty()
  name: string;

  @Prop({ required: true })
  @IsNotEmpty()
  description: string;

  @Prop({ required: true, type: Number })
  @IsNumber()
  @IsPositive()
  price: number;
  
  @Prop({ required: true, type: Number })
  @IsNumber()
  @IsPositive()
  stock: number;

  @Prop({ required: true, default: true })
  @IsBoolean()
  isActive: boolean;

  @Prop({ type: Date, default: Date.now })
  @IsDate()
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
