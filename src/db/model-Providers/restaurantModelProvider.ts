import { Connection } from "mongoose";
import { dbConfig } from "src/core/config/dbConfig";
// import { UserSchema } from "src/core/schema/user.schema";
import { InventorySchema } from "src/core/schema/restaurant.schema";
export const restaurantModelProviders = [
    {
      provide: dbConfig.inventoryModel,
      useFactory: (connection: Connection) =>
        connection.model(dbConfig.collectionName,InventorySchema),
      inject: [dbConfig.dbName],
    },
];