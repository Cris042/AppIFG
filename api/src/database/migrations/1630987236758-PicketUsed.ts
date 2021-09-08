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
                    type: 'date',
                },

                {
                    name: 'dateExitPicket',
                    type: 'date',
                    isNullable: true,
                },

                {
                    name: 'picketID',
                    type: 'integer',
                },

                {
                    name: 'cattleID',
                    type: 'integer',
                },

              ],

              foreignKeys: 
              [
                  
                {
                    name: 'picket',
                    columnNames: ['picketID'],
                    referencedTableName: 'picket',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },

                {
                    name: 'cattlet',
                    columnNames: ['cattleID'],
                    referencedTableName: 'cattle',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
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
