import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCotizacionDto } from './dto/create-cotizacion.dto.js';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto.js';
import {
  Cotizacion,
  EstadoCotizacion,
} from './entities/cotizacion.entity.js';

@Injectable()
export class CotizacionService {
  constructor(
    @InjectRepository(Cotizacion)
    private readonly cotizacionRepository: Repository<Cotizacion>,
  ) {}

  async create(
    createCotizacionDto: CreateCotizacionDto,
  ): Promise<Cotizacion> {
    const cotizacion = this.cotizacionRepository.create({
      ...createCotizacionDto,
      estado: EstadoCotizacion.BORRADOR,
      motivoRechazo: null,
    });

    return this.cotizacionRepository.save(cotizacion);
  }

  async findAll(): Promise<Cotizacion[]> {
    return this.cotizacionRepository.find();
  }

  async findOne(id: string): Promise<Cotizacion> {
    const cotizacion = await this.cotizacionRepository.findOne({
      where: { id },
    });

    if (!cotizacion) {
      throw new NotFoundException(
        `No se encontró la cotización con ID ${id}`,
      );
    }

    return cotizacion;
  }

  async update(
    id: string,
    updateCotizacionDto: UpdateCotizacionDto,
  ): Promise<Cotizacion> {
    const cotizacion = await this.findOne(id);

    Object.assign(cotizacion, updateCotizacionDto);

    return this.cotizacionRepository.save(cotizacion);
  }

  async remove(id: string): Promise<void> {
    const cotizacion = await this.findOne(id);

    await this.cotizacionRepository.remove(cotizacion);
  }
}