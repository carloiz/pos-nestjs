// src/common/models/base.model.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

@Injectable()
export class BaseModel<T extends Document> {
  constructor(@InjectModel('') private readonly model: Model<T>) {}

  async create(createDto: any): Promise<T> {
    const createdEntity = new this.model(createDto);
    return createdEntity.save();
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  async update(id: string, updateDto: any): Promise<T> {
    return this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async delete(id: string): Promise<T> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
