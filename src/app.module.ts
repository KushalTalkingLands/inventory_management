import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [UserModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
