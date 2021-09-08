import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Vaccine1630987275605 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
              name: 'vaccine',
              columns: 
              [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },

                {
                    name: 'name',
                    type: 'varchar',
                    isUnique: true,
                },

                {
                    name: 'doses',
                    type: 'integer',
                    default: 1,
                },

                {
                    name: 'dosesTime',
                    type: 'integer',
                    isNullable: true,
                },

                {
                    name: 'timeEffective',
                    type: 'integer',
                    isNullable: true,
                },


              ],
              
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('vaccine');
    }

}
