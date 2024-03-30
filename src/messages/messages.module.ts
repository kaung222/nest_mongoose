import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { MessageController } from './messages.controlller';
import { Message, MessageSchema } from './entities/message.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [MessageController],
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [MessagesGateway, MessagesService],
})
export class MessagesModule {}
