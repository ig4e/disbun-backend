import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationRelatedUserIdUserIdCompoundUniqueInput } from './user-relation-related-user-id-user-id-compound-unique.input';

@InputType()
export class UserRelationWhereUniqueInput {

    @Field(() => UserRelationRelatedUserIdUserIdCompoundUniqueInput, {nullable:true})
    relatedUserId_userId?: UserRelationRelatedUserIdUserIdCompoundUniqueInput;
}
