import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { IncomingMessage } from 'http';
import { ContextService } from '../../domain/services/context.service';

@Injectable()
export class TokenGuard implements CanActivate {
  private readonly logger = new Logger(TokenGuard.name);

  constructor(
      private readonly contextService: ContextService,
  ) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest<IncomingMessage>();
    const token = request.headers.authorization;
    if (token) {
      this.logger.log(`Save token: ${token}`);
      this.contextService.set('token', token);
    }
    return true;
  }
}
