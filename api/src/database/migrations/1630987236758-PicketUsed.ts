import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PicketUsed1630987236758 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
              name: 'picketUsed',
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
                    name: 'dateEntryPicket',
                    type: 'varchar',
                },

                {
                    name: 'dateExitPicket',
                    type: 'varchar',
                    isNullable: true,
                },

                {
                    name: 'picketID',
                    type: 'integer',
                },

                {
                    name: 'cattleID',
                    type: 'varchar',
                },

                {
                    name: 'occupancyRate',
                    type: 'integer',
                },

              ],
              
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('picketUsed');
    }

}
