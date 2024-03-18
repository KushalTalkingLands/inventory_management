import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { dbConfig } from 'src/core/config/dbConfig';
import { databaseProviders } from './db.provider';
import { userModelProviders } from './model-Providers/userModel.provider';
import { inventoryModelProviders } from './model-Providers/inventoryModelProvider';
@Module({
    providers:[...databaseProviders,...userModelProviders,...inventoryModelProviders],
    exports: [...databaseProviders,...userModelProviders,...inventoryModelProviders],
})
export class DbModule {}
