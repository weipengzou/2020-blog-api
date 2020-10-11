import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  Put,
} from '@nestjs/common';
import { acticleModel } from './article.model';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
class createArticleDto {
  @ApiProperty({ description: '文章标题', example: '默认标题' })
  title: string;
  @ApiProperty({ description: '文章内容', example: '默认内容' })
  content: string;
}

@ApiTags('文章')
@Controller('article')
export class ArticleController {
  constructor(private readonly articlesServer: ArticlesService) {}
  @Get()
  @ApiOperation({ summary: '获取文章' })
  async fetch(@Param('id') id?) {
    return this.articlesServer.getArticle(id);
  }
  @Post()
  @ApiOperation({ summary: '创建文章' })
  async create(@Body() createArticleDto: createArticleDto) {
    return this.articlesServer.createArticle(createArticleDto);
  }
  // todo
  @Put(':id')
  @ApiOperation({ summary: '更新文章' })
  async update(@Param() id, @Body() content) {
    let res = await acticleModel.findByIdAndUpdate(id, content);
    // return this.articlesServer.
  }
  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  async remove(@Param('id') id) {
    return this.articlesServer.removeArticle(id);
  }
}
