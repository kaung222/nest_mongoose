import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const MAIN_PORT = parseInt(process.env.MAIN_PORT) || 9000;
const MS_PORT = parseInt(process.env.MS_PORT) || 9001;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: MS_PORT,
    },
  });
  await app.startAllMicroservices();
  await app.listen(MAIN_PORT);
}
bootstrap();
