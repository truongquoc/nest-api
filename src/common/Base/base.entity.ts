import {
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BaseEntity,
  } from "typeorm";
  import { ApiProperty } from "@nestjs/swagger";
  
  export abstract class Base extends BaseEntity {
    @ApiProperty({ readOnly: true })
    @CreateDateColumn()
    public createdAt: Date;
  
    @ApiProperty({ readOnly: true })
    @UpdateDateColumn({nullable: true})
    public updatedAt?: Date;
  
    @ApiProperty({ readOnly: true })
    @DeleteDateColumn({nullable: true})
    public deletedAt?: Date;
  }
  