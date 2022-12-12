import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationCreateInput } from './user-relation-create.input';
import { UserRelationUpdateInput } from './user-relation-update.input';

@ArgsType()
export class UpsertOneUserRelationArgs {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationCreateInput, {nullable:false})
    @Type(() => UserRelationCreateInput)
    create!: UserRelationCreateInput;

    @Field(() => UserRelationUpdateInput, {nullable:false})
    @Type(() => UserRelationUpdateInput)
    update!: UserRelationUpdateInput;
}
