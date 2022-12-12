import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRelationsNestedInput } from '../user/user-update-one-required-without-relations-nested.input';
import { EnumUserRelationTypeFieldUpdateOperationsInput } from '../prisma/enum-user-relation-type-field-update-operations.input';
import { ChannelDmUpdateOneRequiredWithoutUserRelationsNestedInput } from '../channel-dm/channel-dm-update-one-required-without-user-relations-nested.input';

@InputType()
export class UserRelationUpdateWithoutRelationUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutRelationsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRelationsNestedInput;

    @Field(() => EnumUserRelationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumUserRelationTypeFieldUpdateOperationsInput;

    @Field(() => ChannelDmUpdateOneRequiredWithoutUserRelationsNestedInput, {nullable:true})
    dm?: ChannelDmUpdateOneRequiredWithoutUserRelationsNestedInput;
}
