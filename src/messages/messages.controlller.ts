import { Controller, Get } from '@nestjs/common';

@Controller()
export class MessageController {
  @Get()
  getAllMessagesByConversationId() {
    return 'all messages by chat id';
  }
}
