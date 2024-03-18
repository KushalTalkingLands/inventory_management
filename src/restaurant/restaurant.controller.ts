import { Body, Controller, Delete, Get, HttpException, HttpStatus, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateInventoryDto } from 'src/core/dto/restaurant.dto';
import { Inventory } from 'src/core/interface/restaurant.interface';
import { InventoryService } from './restaurant.service';
import { appConfig } from 'src/core/config/appConfig';
import { LoggerConstant } from 'src/core/constants/loggerConstant';
import { AuthGuard } from 'src/core/gaurd/auth.gaurd';

@Controller(appConfig.restaurantController)
export class InventoryController {
    private readonly logger = new Logger(InventoryController.name);
    constructor(private readonly inventoryService: InventoryService) { }

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() CreateInventoryDto: CreateInventoryDto): Promise<Inventory> {
        this.logger.log(LoggerConstant.CreateInventoryController);
        try{
        const createInventory = this.inventoryService.create(CreateInventoryDto);
        this.logger.log(LoggerConstant.createInventoryDone);
        return createInventory
        }catch(err){
            this.logger.error(LoggerConstant.createInventoryError)
            throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
        }
    }
    @Get()
    async findAll(): Promise<Inventory[]> {
        this.logger.log(LoggerConstant.getInventorys);
        try{
        const findall = this.inventoryService.findAll();
        this.logger.log(LoggerConstant.getInventorysDone)
        return findall
        }catch(err){
            this.logger.error(LoggerConstant.getInventorysError)
            throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
        }
    }

    @Get(appConfig.restaurantParamId)
    async findOne(@Param(appConfig.restaurantId) id: string): Promise<Inventory> {
        // return 
        try{
            const findone = this.inventoryService.findById(id);
            this.logger.log(LoggerConstant.getOneInventorysDone)
            return findone
            }catch(err){
                this.logger.error(LoggerConstant.getOneInventorysError)
                throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
            }
    }

    @Put(appConfig.restaurantParamId)
    @UseGuards(AuthGuard)
    async update(@Param(appConfig.restaurantId) id: string, @Body() updateRestaurantDto: CreateInventoryDto): Promise<Inventory> {
        // return 
        try{
            const update = this.inventoryService.update(id, updateRestaurantDto);
            this.logger.log(LoggerConstant.updateOneInventorysDone)
            return update
            }catch(err){
                this.logger.error(LoggerConstant.updateOneInventorysError)
                throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
            }
    }

    @Delete(appConfig.restaurantParamId)
    @UseGuards(AuthGuard)
    async remove(@Param(appConfig.restaurantId) id: string): Promise<Inventory> {
        // return 
        try{
            const deleteres = this.inventoryService.delete(id);
            this.logger.log(LoggerConstant.deleteInventorysDone)
            return deleteres
            }catch(err){
                this.logger.error(LoggerConstant.deleteInventorysError)
                throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
            }
    }
}
