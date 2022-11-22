import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import pug from 'pug';
import { AppModule } from '../src/app.module';

import '../views';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useStaticAssets(join(__dirname, '..', 'public'));
  app.engine('pug', pug.__express);
  app.setBaseViewsDir(join(process.cwd(), '..', 'views'));
  app.setViewEngine('pug');

  await app.listen(3000);
  return app;
}
// bootstrap();
module.exports = bootstrap();
