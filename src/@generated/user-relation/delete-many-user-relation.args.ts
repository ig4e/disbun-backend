import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRelationWhereInput } from './user-relation-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserRelationArgs {

    @Field(() => UserRelationWhereInput, {nullable:true})
    @Type(() => UserRelationWhereInput)
    where?: UserRelationWhereInput;
}
