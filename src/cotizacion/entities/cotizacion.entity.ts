import { 
Entity,
PrimaryGeneratedColumn,
Column,
CreateDateColumn,
UpdateDateColumn } from 'typeorm';


export enum EstadoCotizacion {
    BORRADOR = 'borrador',
    PENDIENTE = 'pendiente',
    ACEPTADA = 'aceptada',
    RECHAZADA = 'rechazada',

}

@Entity('cotizacion')
export class Cotizacion {

@PrimaryGeneratedColumn('uuid')
id: string;

@Column({type:'varchar',length:100})
cliente:string 

@Column({type:'varchar',length:50})
destino:string

@Column({ type:'date' })
fechaDeSalida:string

@Column({type:'date'})
fechaDeEntrada:string

@Column({type:'int'})
pasajeros:number

@Column({type:'decimal', precision: 12, scale: 2})
valorTotal:string

@Column({type:'varchar', length: 100})
asesor: string

@Column({
    type:'enum',enum:EstadoCotizacion, default: EstadoCotizacion.BORRADOR
})
estado: EstadoCotizacion

@Column({type:'varchar', length: 50, nullable: true})
motivoRechazo:string | null

@CreateDateColumn({name:'created_at', type: 'timestamp'})
createdAt:Date

@UpdateDateColumn({name:'updated_at', type: 'timestamp'})
updateAt: Date
}