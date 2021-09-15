import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Cattle1630987169956 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
              name: 'cattle',
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
                    name: 'breed',
                    type: 'string',
                },

                {
                    name: 'name',
                    type: 'string',
                    isUnique: true,
                },


                {
                    name: 'initialWeight',
                    type: 'integer',
                    isNullable : true,
                },

                {
                    name: 'weight',
                    type: 'integer',
                    isNullable : true,
                },

                {
                    name: 'node',
                    type: 'text',
                    isNullable : true,
                },

                {
                    name: 'purchaseValue',
                    type: 'integer',
                    isNullable : true,
                },

                {
                    name: 'dailyConsumption',
                    type: 'integer',
                    isNullable : true,
                },

                {
                    name: 'datePurchase',
                    type: 'date',               
                },

                {
                    name: 'dateOfBirth',
                    type: 'date',
                },
                
              ],

              foreignKeys: 
              [

                {
                  name: 'breed',
                  columnNames: ['breed'],
                  referencedTableName: 'breed',
                  referencedColumnNames: ['name'],
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE',
                },
                
              ],

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('cattle');
    }

}
