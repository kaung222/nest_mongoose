import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://james:0MTwJpxkEUqRAIG9@cluster0.iu1mdby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ClientsModule.register([
      {
        name: 'CHAT_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 9091,
        },
      },
    ]),
    MessagesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
