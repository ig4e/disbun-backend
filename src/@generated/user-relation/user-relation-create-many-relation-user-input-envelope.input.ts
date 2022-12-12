import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateManyRelationUserInput } from './user-relation-create-many-relation-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRelationCreateManyRelationUserInputEnvelope {

    @Field(() => [UserRelationCreateManyRelationUserInput], {nullable:false})
    @Type(() => UserRelationCreateManyRelationUserInput)
    data!: Array<UserRelationCreateManyRelationUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
