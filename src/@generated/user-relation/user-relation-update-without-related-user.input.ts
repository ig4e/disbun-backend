import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutUserRelationsNestedInput } from '../user/user-update-one-required-without-user-relations-nested.input';
import { EnumRelationStatusFieldUpdateOperationsInput } from '../prisma/enum-relation-status-field-update-operations.input';
import { DmChannelUpdateOneWithoutUserRelationNestedInput } from '../dm-channel/dm-channel-update-one-without-user-relation-nested.input';

@InputType()
export class UserRelationUpdateWithoutRelatedUserInput {

    @Field(() => UserUpdateOneRequiredWithoutUserRelationsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserRelationsNestedInput;

    @Field(() => EnumRelationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumRelationStatusFieldUpdateOperationsInput;

    @Field(() => DmChannelUpdateOneWithoutUserRelationNestedInput, {nullable:true})
    channel?: DmChannelUpdateOneWithoutUserRelationNestedInput;
}
