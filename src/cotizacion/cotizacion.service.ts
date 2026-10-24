import { Injectable } from '@nestjs/common';
import { CreateCotizacionDto } from './dto/create-cotizacion.dto.js';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto.js';

@Injectable()
export class CotizacionService {
  create(createCotizacionDto: CreateCotizacionDto) {
    return 'This action adds a new cotizacion';
  }

  findAll() {
    return `This action returns all cotizacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cotizacion`;
  }

  update(id: number, updateCotizacionDto: UpdateCotizacionDto) {
    return `This action updates a #${id} cotizacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} cotizacion`;
  }
}
