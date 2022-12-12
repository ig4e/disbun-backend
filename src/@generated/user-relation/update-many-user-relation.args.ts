import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRelationUpdateManyMutationInput } from './user-relation-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserRelationWhereInput } from './user-relation-where.input';

@ArgsType()
export class UpdateManyUserRelationArgs {

    @Field(() => UserRelationUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRelationUpdateManyMutationInput)
    data!: UserRelationUpdateManyMutationInput;

    @Field(() => UserRelationWhereInput, {nullable:true})
    @Type(() => UserRelationWhereInput)
    where?: UserRelationWhereInput;
}
