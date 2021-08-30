import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { CommentsCreateDto } from '../dto/comments.create.dto';
import { CommentsService } from '../services/comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  // 모든 고양이 프로필에 적힌 댓글 가져오기
  @Get()
  async getAllComments() {
    return this.commentsService.getAllComments();
  }

  // 특정 고양이 프로필에 댓글 남기기
  @Post(':id')
  async createComment(
    @Param('id') id: string,
    @Body() body: CommentsCreateDto,
  ) {
    return this.commentsService.createComment(id, body);
  }

  // 특정 고양이 프로필에 댓글 남기기
  @Patch(':id')
  async plusLike(@Param('id') id: string) {
    return this.commentsService.plusLike(id);
  }
}
