import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InventoryDao } from 'src/core/dao/restaurant.dao';
import { CreateInventoryDto } from 'src/core/dto/restaurant.dto';
import { Inventory } from 'src/core/interface/restaurant.interface';
import { LoggerConstant } from 'src/core/constants/loggerConstant';

@Injectable()
export class InventoryService {
    private readonly logger = new Logger(InventoryService.name);

    constructor(private readonly inventoryDao: InventoryDao) {}

    async create(CreateInventoryDto: CreateInventoryDto): Promise<Inventory> {
        this.logger.log(LoggerConstant.CreateInventoryService);
        try {
            const Inventory = await this.inventoryDao.create(CreateInventoryDto);
            this.logger.log(LoggerConstant.createInventoryDoneService);
            return Inventory;
        } catch (error) {
            this.logger.error(LoggerConstant.createInventoryErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async findAll(): Promise<Inventory[]> {
        try {
            this.logger.log(LoggerConstant.getInventorysService);
            const Inventorys = await this.inventoryDao.findAll();
            this.logger.log(LoggerConstant.getInventorysDoneService);
            return Inventorys;
        } catch (error) {
            this.logger.error(LoggerConstant.getInventorysErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async findById(id: string): Promise<Inventory> {
        try {
            this.logger.log(LoggerConstant.getOneInventorysService);
            const Inventory = await this.inventoryDao.findById(id);
            this.logger.log(LoggerConstant.getOneInventorysDoneService);
            return Inventory;
        } catch (error) {
            this.logger.error(LoggerConstant.getOneInventorysErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: string, CreateInventoryDto: CreateInventoryDto): Promise<Inventory> {
        try {
            this.logger.log(LoggerConstant.updateOneInventorysService);
            const updatedInventory = await this.inventoryDao.update(id, CreateInventoryDto);
            this.logger.log(LoggerConstant.updateOneInventorysService);
            return updatedInventory;
        } catch (error) {
            this.logger.error(LoggerConstant.updateOneInventorysErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string): Promise<Inventory> {
        try {
            this.logger.log(LoggerConstant.deleteInventorysService);
            const deletedInventory = await this.inventoryDao.delete(id);
            this.logger.log(LoggerConstant.deleteInventorysDoneService);
            return deletedInventory;
        } catch (error) {
            this.logger.error(LoggerConstant.deleteInventorysErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}

