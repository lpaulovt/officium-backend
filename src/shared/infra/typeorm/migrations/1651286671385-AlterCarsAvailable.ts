import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCarsAvailable1651286671385 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("cars", "avaliable", "available");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }
}
