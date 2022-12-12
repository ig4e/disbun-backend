import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserRelationsInput } from '../user/user-create-nested-one-without-user-relations.input';
import { RelationStatus } from '../prisma/relation-status.enum';
import { DmChannelCreateNestedOneWithoutUserRelationInput } from '../dm-channel/dm-channel-create-nested-one-without-user-relation.input';

@InputType()
export class UserRelationCreateWithoutRelatedUserInput {

    @Field(() => UserCreateNestedOneWithoutUserRelationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserRelationsInput;

    @Field(() => RelationStatus, {nullable:true})
    status?: keyof typeof RelationStatus;

    @Field(() => DmChannelCreateNestedOneWithoutUserRelationInput, {nullable:true})
    channel?: DmChannelCreateNestedOneWithoutUserRelationInput;
}
