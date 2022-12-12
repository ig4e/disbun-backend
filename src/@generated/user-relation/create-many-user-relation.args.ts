import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRelationCreateManyInput } from './user-relation-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserRelationArgs {

    @Field(() => [UserRelationCreateManyInput], {nullable:false})
    @Type(() => UserRelationCreateManyInput)
    data!: Array<UserRelationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
