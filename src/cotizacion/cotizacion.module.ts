import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CotizacionService } from './cotizacion.service.js';
import { CotizacionController } from './cotizacion.controller.js';
import { Cotizacion } from './entities/cotizacion.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Cotizacion])],
  controllers: [CotizacionController],
  providers: [CotizacionService],
})
export class CotizacionModule {}
