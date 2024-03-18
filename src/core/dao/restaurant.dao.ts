import { HttpException, HttpStatus, Inject, Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateInventoryDto } from "../dto/restaurant.dto";
import { Inventory } from "../interface/restaurant.interface";
import { LoggerConstant } from "../constants/loggerConstant";
import { dbConfig } from "../config/dbConfig";

@Injectable()
export class InventoryDao {
    private readonly logger = new Logger(InventoryDao.name);

    constructor(@Inject(dbConfig.inventoryModel) private readonly InventoryModel: Model<Inventory>) {}

    async create(CreateInventoryDto: CreateInventoryDto): Promise<Inventory> {
        try {
            this.logger.log(LoggerConstant.CreateInventoryDao);
            const createdInventory = new this.InventoryModel(CreateInventoryDto);
            this.logger.log(LoggerConstant.createInventoryDoneDao);
            return createdInventory.save();
        } catch (error) {
            this.logger.error(LoggerConstant.createInventoryErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async findAll(): Promise<Inventory[]> {
        try {
            this.logger.log(LoggerConstant.getInventorysDao);
            const find = this.InventoryModel.find().exec();
            this.logger.log(LoggerConstant.getInventorysDoneDao);
            return find
        } catch (error) {
            this.logger.error(LoggerConstant.getInventorysErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async findById(id: string): Promise<Inventory> {
        try {
            this.logger.log(LoggerConstant.getOneInventorysDao);
            const findone = this.InventoryModel.findById(id).exec();
            this.logger.log(LoggerConstant.getOneInventorysDoneDao);
            return findone
        } catch (error) {
            this.logger.error(LoggerConstant.getOneInventorysErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: string, CreateInventoryDto: CreateInventoryDto): Promise<Inventory> {
        try {
            this.logger.log(LoggerConstant.updateOneInventorysDao);
            const update = this.InventoryModel.findByIdAndUpdate(id, CreateInventoryDto, { new: true }).exec();
            this.logger.log(LoggerConstant.updateOneInventorysDoneDao);
            return update
        } catch (error) {
            this.logger.error(LoggerConstant.updateOneInventorysErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string): Promise<Inventory> {
        try {
            this.logger.log(LoggerConstant.deleteInventorysDao);
            const deleteres = this.InventoryModel.findByIdAndDelete(id).exec();
            this.logger.log(LoggerConstant.deleteInventorysDoneDao);
            return deleteres
        } catch (error) {
            this.logger.error(LoggerConstant.deleteInventorysErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}