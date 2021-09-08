import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1630987263999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
              name: 'user',
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
                },

                {
                    name: 'email',
                    type: 'varchar',
                },

                {
                    name: 'telephone',
                    type: 'varchar',
                    isNullable: true,
                },


              ],
              
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('user');
    }

}
