import{  IsDateString, IsString } from 'class-validator'





export class CreateCotizacionDto {
@IsString()
cliente: string

@IsString()
destino: string

@IsDateString()
fecha


}