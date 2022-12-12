import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserOnGroupWhereInput } from '../user-on-group/user-on-group-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserOnGroupArgs {

    @Field(() => UserOnGroupWhereInput, {nullable:true})
    @Type(() => UserOnGroupWhereInput)
    where?: UserOnGroupWhereInput;
}
