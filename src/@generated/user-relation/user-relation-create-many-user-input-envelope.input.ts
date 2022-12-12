import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateManyUserInput } from './user-relation-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRelationCreateManyUserInputEnvelope {

    @Field(() => [UserRelationCreateManyUserInput], {nullable:false})
    @Type(() => UserRelationCreateManyUserInput)
    data!: Array<UserRelationCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
