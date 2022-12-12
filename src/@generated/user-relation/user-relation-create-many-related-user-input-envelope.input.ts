import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateManyRelatedUserInput } from './user-relation-create-many-related-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRelationCreateManyRelatedUserInputEnvelope {

    @Field(() => [UserRelationCreateManyRelatedUserInput], {nullable:false})
    @Type(() => UserRelationCreateManyRelatedUserInput)
    data!: Array<UserRelationCreateManyRelatedUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
