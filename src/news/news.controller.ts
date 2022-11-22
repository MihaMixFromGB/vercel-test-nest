import { Controller, Get, Render } from '@nestjs/common';

@Controller('news')
export class NewsController {
  @Get()
  @Render('index.pug')
  async get() {
    return;
  }
}
