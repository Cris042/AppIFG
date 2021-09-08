import { MigrationInterface, QueryRunner , Table} from "typeorm";

export class VaccineReport1630987302976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
              name: 'vaccineReport',
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
                    name: 'timeEffective',
                    type: 'date',
                },

                {
                    name: 'vaccineID',
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
                    name: 'vaccine',
                    columnNames: ['vaccineID'],
                    referencedTableName: 'vaccine',
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
        await queryRunner.dropTable('vaccineReport');
    }

}
