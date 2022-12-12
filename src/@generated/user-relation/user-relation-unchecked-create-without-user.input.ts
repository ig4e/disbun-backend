import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationStatus } from '../prisma/relation-status.enum';
import { HideField } from '@nestjs/graphql';
import { DmChannelUncheckedCreateNestedOneWithoutUserRelationInput } from '../dm-channel/dm-channel-unchecked-create-nested-one-without-user-relation.input';

@InputType()
export class UserRelationUncheckedCreateWithoutUserInput {

    @Field(() => RelationStatus, {nullable:true})
    status?: keyof typeof RelationStatus;

    @HideField()
    relatedUserId!: string;

    @Field(() => DmChannelUncheckedCreateNestedOneWithoutUserRelationInput, {nullable:true})
    channel?: DmChannelUncheckedCreateNestedOneWithoutUserRelationInput;
}
