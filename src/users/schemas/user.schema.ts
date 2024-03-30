import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ select: false })
  password: string;

  @Prop()
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
