/*
 * @Author: 邹威鹏(944740645@qq.com)
 * @remarks: 
 */
import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './articles.controller';

describe('ArticleController', () => {
  let controller: ArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
