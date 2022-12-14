import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRelationsInput } from '../user/user-create-nested-one-without-relations.input';
import { UserCreateNestedOneWithoutUserSideRelationsInput } from '../user/user-create-nested-one-without-user-side-relations.input';
import { RelationStatus } from '../prisma/relation-status.enum';
import { DmChannelCreateNestedOneWithoutUserRelationInput } from '../dm-channel/dm-channel-create-nested-one-without-user-relation.input';

@InputType()
export class UserRelationCreateInput {

    @Field(() => UserCreateNestedOneWithoutRelationsInput, {nullable:false})
    relatedUser!: UserCreateNestedOneWithoutRelationsInput;

    @Field(() => UserCreateNestedOneWithoutUserSideRelationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserSideRelationsInput;

    @Field(() => RelationStatus, {nullable:true})
    status?: keyof typeof RelationStatus;

    @Field(() => DmChannelCreateNestedOneWithoutUserRelationInput, {nullable:true})
    channel?: DmChannelCreateNestedOneWithoutUserRelationInput;
}
