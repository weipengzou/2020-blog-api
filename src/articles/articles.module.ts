import { Module } from '@nestjs/common';
import { ArticleController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticlesService]
})
export class ArticleModule {}
