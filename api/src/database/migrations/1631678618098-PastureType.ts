import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PastureType1631678618098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
              name: 'pastureType',
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
                    name: 'amountOffood',
                    type: 'number',
                }

              ],
              
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('pastureType');
    }

}
