import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserRelationRelatedUserIdUserIdCompoundUniqueInput {

    @HideField()
    relatedUserId!: string;

    @HideField()
    userId!: string;
}
