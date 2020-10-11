/*
 * @Author: 邹威鹏(944740645@qq.com)
 * @remarks:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
async function bootstrap() {
  await mongoose.connect('mongodb://localhost/blog-api', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log('连接数据库成功');
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('2020_blog_api')
    .setDescription('2020博客接口')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();
