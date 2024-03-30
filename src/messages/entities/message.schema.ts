import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '@/users/schemas/user.schema';

export type CatDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop({ unique: true, type: mongoose.Schema.Types.ObjectId })
  id: string;

  @Prop()
  message: string;

  @Prop()
  images: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  sender: User;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
