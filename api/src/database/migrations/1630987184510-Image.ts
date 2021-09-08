import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Image1630987184510 implements MigrationInterface {

    public async up( queryRunner: QueryRunner ): Promise<void> 
    {     
        await queryRunner.createTable(
            new Table({
              name: 'images',
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
                    name: 'path',
                    type: 'varchar',
                },

                {
                    name: 'propertyID',
                    type: 'integer',
                },
                
              ],
              
              foreignKeys: 
              [

                {
                  name: 'Image',
                  columnNames: ['propertyID'],
                  referencedTableName: 'property',
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
       await queryRunner.dropTable('images');
    }

}
