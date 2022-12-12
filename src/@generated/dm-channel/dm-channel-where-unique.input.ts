import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelUserRelationRelatedUserIdUserRelationUserIdCompoundUniqueInput } from './dm-channel-user-relation-related-user-id-user-relation-user-id-compound-unique.input';

@InputType()
export class DmChannelWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => DmChannelUserRelationRelatedUserIdUserRelationUserIdCompoundUniqueInput, {nullable:true})
    userRelationRelatedUserId_userRelationUserId?: DmChannelUserRelationRelatedUserIdUserRelationUserIdCompoundUniqueInput;
}
