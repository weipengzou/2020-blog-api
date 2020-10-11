
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './articles/articles.module';
import { ArticlesService } from './articles/articles.service';

@Module({
  imports: [ArticleModule],
  controllers: [AppController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
