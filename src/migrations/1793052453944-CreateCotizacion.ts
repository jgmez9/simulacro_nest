import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCotizacion1793052453944 implements MigrationInterface {
    name = 'CreateCotizacion1793052453944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."cotizacion_estado_enum" AS ENUM('borrador', 'pendiente', 'aceptada', 'rechazada')`);
        await queryRunner.query(`CREATE TABLE "cotizacion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cliente" character varying(100) NOT NULL, "destino" character varying(50) NOT NULL, "fechaDeSalida" date NOT NULL, "fechaDeEntrada" date NOT NULL, "pasajeros" integer NOT NULL, "valorTotal" numeric NOT NULL, "asesor" character varying(100) NOT NULL, "estado" "public"."cotizacion_estado_enum" NOT NULL DEFAULT 'borrador', "motivoRechazo" character varying(50), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_84a2ae8abd0e7f658978b29a4b9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cotizacion"`);
        await queryRunner.query(`DROP TYPE "public"."cotizacion_estado_enum"`);
    }

}
