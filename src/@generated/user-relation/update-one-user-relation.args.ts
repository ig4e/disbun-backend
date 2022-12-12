import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRelationUpdateInput } from './user-relation-update.input';
import { Type } from 'class-transformer';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';

@ArgsType()
export class UpdateOneUserRelationArgs {

    @Field(() => UserRelationUpdateInput, {nullable:false})
    @Type(() => UserRelationUpdateInput)
    data!: UserRelationUpdateInput;

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;
}
