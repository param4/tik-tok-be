import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UnauthorizedError } from './errors';
import { Config } from '../../config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const accessToken = this.getTokensFromRequest(request);
    if (!accessToken) {
      throw new UnauthorizedError();
    }

    try {
      const payload = await this.jwtService.verifyAsync(accessToken, {
        secret: Config.JWT_SECRET,
      });
      request['user'] = payload;
    } catch (error) {
      console.log('AuthGuard:', error);
      throw new UnauthorizedError();
    }

    return true;
  }

  private getTokensFromRequest(request: Request): string | null {
    const authorization = request.headers.authorization;
    if (!authorization) {
      return null;
    }
    const [bearer, accessToken] = authorization.split(' ');
    if (bearer !== 'Bearer') {
      return null;
    }
    return accessToken;
  }
}
