import { Injectable } from '@nestjs/common';
import { acticleModel } from './article.model';
@Injectable()
export class ArticlesService {
  async getArticle(id?) {
    let res;
    let statusCode;
    let message;
    try {
      id
        ? (res = await acticleModel.findById(id))
        : (res = await acticleModel.find());
      statusCode = 200;
      message = '查询文章完毕';
    } catch (error) {
      message = '未找到文章';
      statusCode = 404;
    }
    return {
      data: res,
      statusCode,
      message,
    };
  }
  async createArticle(content) {
    let res;
    let statusCode;
    let message;
    res = await acticleModel.create(content);
    statusCode = 200;
    message = '文章创建完成';
    return {
      data: res,
      message,
      statusCode,
    };
  }
  async removeArticle(id) {
    let res;
    let statusCode;
    let message;
    try {
      res = await acticleModel.findByIdAndRemove(id);
      statusCode = 200;
      message = '文章删除完成';
    } catch (error) {
      statusCode = 404;
      message = '文章删除失败';
    }
    return {
      data: res,
      message,
      statusCode,
    };
  }
  async changeArticle(id, content) {
    // let res = await acticleModel.findByIdAndUpdate(id, content);
  }
}
