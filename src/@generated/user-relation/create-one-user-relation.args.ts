import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRelationCreateInput } from './user-relation-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserRelationArgs {

    @Field(() => UserRelationCreateInput, {nullable:false})
    @Type(() => UserRelationCreateInput)
    data!: UserRelationCreateInput;
}
