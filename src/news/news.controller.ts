import { Controller, Get, Render } from '@nestjs/common';

@Controller('news')
export class NewsController {
  @Get()
  @Render('index')
  async get() {
    return;
  }
}
