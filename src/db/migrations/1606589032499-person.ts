import {MigrationInterface, QueryRunner} from "typeorm";

export class person1606589032499 implements MigrationInterface {
    name = 'person1606589032499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "address" character varying NOT NULL, "number" character varying NOT NULL, "neighborhood" character varying NOT NULL, "phone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
