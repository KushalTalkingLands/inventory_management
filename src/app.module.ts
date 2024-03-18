import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { InventoryModule} from './inventory/inventory.module';

@Module({
  imports: [UserModule, InventoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
