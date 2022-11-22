import { Controller, Get, Render } from '@nestjs/common';
// import { readdirSync } from 'fs';

@Controller('news')
export class NewsController {
  @Get()
  @Render('index')
  async get() {
    return;
  }
}
