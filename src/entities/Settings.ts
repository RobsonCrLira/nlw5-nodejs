import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('setting')
class Setting {
   @PrimaryColumn()
   id: String;

   @Column()
   username: String;

   @Column()
   chat: boolean;

   @Column()
   updated_at: Date;

   @Column()
   created_at: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}

export { Setting };
