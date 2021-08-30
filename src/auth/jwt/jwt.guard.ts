import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// strategy 가 자동으로 실행
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
