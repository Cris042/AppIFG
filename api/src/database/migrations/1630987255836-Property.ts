import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class Property1630987255836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
              name: 'property',
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
                    name: 'email',
                    type: 'varchar',
                    isNullable: true,
                },

                {
                    name: 'telephone',
                    type: 'integer',
                    isNullable: true,
                },

                {
                    name: 'size',
                    type: 'integer',    
                },

                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },

                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },

                {
                    name: 'propertyID',
                    type: 'integer',    
                },

                
              ],

              foreignKeys: 
              [
                  
                {
                    name: 'image',
                    columnNames: ['propertyID'],
                    referencedTableName: 'image',
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
        await queryRunner.dropTable('property');
    }

}
