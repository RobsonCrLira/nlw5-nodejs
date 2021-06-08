/* eslint class-methods-use-this: ["error", { "exceptMethods": ["up],["down"] }] */
/* eslint max-classes-per-file: ["error", 2] */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSettings1623017287959 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'settings',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
               },
               {
                  name: 'username',
                  type: 'varchar',
               },
               {
                  name: 'chat',
                  type: 'boolean',
                  default: true,
               },
               {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
               },
               {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
               },
            ],
         }),
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('settings');
   }
}
