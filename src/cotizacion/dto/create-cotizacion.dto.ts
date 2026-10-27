import{  
    IsDateString,
    IsInt,
    IsNotEmpty,
    IsNumberString,
    IsString,
    Min } from 'class-validator'


export class CreateCotizacionDto {
@IsString()
@IsNotEmpty()
cliente: string

@IsString()
@IsNotEmpty()
destino: string

@IsDateString()
fechaDeSalida: string

@IsDateString()
fechaDeEntrada: string

@IsInt()
@Min(1)
pasajeros : number

@IsNumberString()
valorTotal: string

@IsString()
@IsNotEmpty()
asesor:string

}