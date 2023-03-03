import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrations1677873202239 implements MigrationInterface {
    name = 'initialMigrations1677873202239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_99e921caf21faa2aab020476e44"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_59c1e5e51addd6ebebf76230b37" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_59c1e5e51addd6ebebf76230b37"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_99e921caf21faa2aab020476e44" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "userId"`);
    }

}
