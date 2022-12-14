import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import pug from 'pug';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import swaggerUi from 'swagger-ui-express';
import { AppModule } from '../src/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'assets/swagger-ui-dist/'), {
    prefix: '/api',
  });
  app.useStaticAssets(join(__dirname, '..', 'assets/images/'), {
    prefix: '/images',
  });
  app.engine('pug', pug.__express);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');

  const config = new DocumentBuilder()
    .setTitle('Cats example ')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // [GET] /api/api/swagger-ui-init.js
  // This file isn't in 'swagger-ui-dist' folder
  // If copy all folder to assets render default api page (Pet Store)
  // SwaggerModule.setup('api', app, document);
  app.use('/api', swaggerUi.serve, swaggerUi.setup(document));

  await app.listen(3000);
  return app;
}
// bootstrap();
module.exports = bootstrap();
