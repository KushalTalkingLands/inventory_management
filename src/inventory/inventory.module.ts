import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { CoreModule } from 'src/core/core.module';
import { InventoryDao } from 'src/core/dao/inventory.dao';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[CoreModule,
    JwtModule.register({
      global: true,
      secret: "This is a test secret key",
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [InventoryController],
  providers: [InventoryService,InventoryDao]
})
export class InventoryModule {}
