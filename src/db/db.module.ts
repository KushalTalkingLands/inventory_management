import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { dbConfig } from 'src/core/config/dbConfig';
import { databaseProviders } from './db.provider';
import { userModelProviders } from './model-Providers/userModel.provider';
import { restaurantModelProviders } from './model-Providers/restaurantModelProvider';
@Module({
    providers:[...databaseProviders,...userModelProviders,...restaurantModelProviders],
    exports: [...databaseProviders,...userModelProviders,...restaurantModelProviders],
})
export class DbModule {}
