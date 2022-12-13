import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRelationRelatedUserIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    relatedUserId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
