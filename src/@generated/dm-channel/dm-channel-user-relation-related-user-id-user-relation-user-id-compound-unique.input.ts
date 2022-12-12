import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class DmChannelUserRelationRelatedUserIdUserRelationUserIdCompoundUniqueInput {

    @HideField()
    userRelationRelatedUserId!: string;

    @HideField()
    userRelationUserId!: string;
}
