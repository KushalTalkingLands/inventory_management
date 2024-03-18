import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
    Logger,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { ROLE_TYPE } from '../dto/user.dto';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    private readonly logger = new Logger(AuthGuard.name);
    constructor(private jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) {
        this.logger.error('Unauthorized: Token not provided');
        throw new UnauthorizedException();
      }
      try {
        const decodedToken = this.jwtService.verify(token);
      // Assuming your JWT payload contains a 'role' field
      const userRole = decodedToken.role;

      // Check if the user has the required role (e.g., 'ADMIN') to perform the operation
      if (userRole !== ROLE_TYPE.SUPER_ADMIN) {
        this.logger.error('Forbidden: Not Permitted');
        throw new ForbiddenException('Not Permitted');
      }
        
      } catch(error) {
        this.logger.error(`Forbidden: ${error.message}`);
        throw new ForbiddenException('Not Permitted');
      }
      this.logger.log('User authenticated successfully with role ADMIN');
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }