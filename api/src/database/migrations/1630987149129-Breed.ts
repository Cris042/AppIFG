import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Breed1630987149129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
              name: 'breed',
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
                    name: 'consumption',
                    type: 'number',
                }

              ],
              
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('breed');
    }

}
