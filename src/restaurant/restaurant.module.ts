import { Module } from '@nestjs/common';
import { InventoryController } from './restaurant.controller';
import { InventoryService } from './restaurant.service';
import { CoreModule } from 'src/core/core.module';
import { InventoryDao } from 'src/core/dao/restaurant.dao';
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
export class RestaurantModule {}
