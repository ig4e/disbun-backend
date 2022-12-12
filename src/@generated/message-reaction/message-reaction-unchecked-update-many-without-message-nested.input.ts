import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionCreateWithoutMessageInput } from './message-reaction-create-without-message.input';
import { Type } from 'class-transformer';
import { MessageReactionCreateOrConnectWithoutMessageInput } from './message-reaction-create-or-connect-without-message.input';
import { MessageReactionUpsertWithWhereUniqueWithoutMessageInput } from './message-reaction-upsert-with-where-unique-without-message.input';
import { MessageReactionCreateManyMessageInputEnvelope } from './message-reaction-create-many-message-input-envelope.input';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';
import { MessageReactionUpdateWithWhereUniqueWithoutMessageInput } from './message-reaction-update-with-where-unique-without-message.input';
import { MessageReactionUpdateManyWithWhereWithoutMessageInput } from './message-reaction-update-many-with-where-without-message.input';
import { MessageReactionScalarWhereInput } from './message-reaction-scalar-where.input';

@InputType()
export class MessageReactionUncheckedUpdateManyWithoutMessageNestedInput {

    @Field(() => [MessageReactionCreateWithoutMessageInput], {nullable:true})
    @Type(() => MessageReactionCreateWithoutMessageInput)
    create?: Array<MessageReactionCreateWithoutMessageInput>;

    @Field(() => [MessageReactionCreateOrConnectWithoutMessageInput], {nullable:true})
    @Type(() => MessageReactionCreateOrConnectWithoutMessageInput)
    connectOrCreate?: Array<MessageReactionCreateOrConnectWithoutMessageInput>;

    @Field(() => [MessageReactionUpsertWithWhereUniqueWithoutMessageInput], {nullable:true})
    @Type(() => MessageReactionUpsertWithWhereUniqueWithoutMessageInput)
    upsert?: Array<MessageReactionUpsertWithWhereUniqueWithoutMessageInput>;

    @Field(() => MessageReactionCreateManyMessageInputEnvelope, {nullable:true})
    @Type(() => MessageReactionCreateManyMessageInputEnvelope)
    createMany?: MessageReactionCreateManyMessageInputEnvelope;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    set?: Array<MessageReactionWhereUniqueInput>;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    disconnect?: Array<MessageReactionWhereUniqueInput>;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    delete?: Array<MessageReactionWhereUniqueInput>;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    connect?: Array<MessageReactionWhereUniqueInput>;

    @Field(() => [MessageReactionUpdateWithWhereUniqueWithoutMessageInput], {nullable:true})
    @Type(() => MessageReactionUpdateWithWhereUniqueWithoutMessageInput)
    update?: Array<MessageReactionUpdateWithWhereUniqueWithoutMessageInput>;

    @Field(() => [MessageReactionUpdateManyWithWhereWithoutMessageInput], {nullable:true})
    @Type(() => MessageReactionUpdateManyWithWhereWithoutMessageInput)
    updateMany?: Array<MessageReactionUpdateManyWithWhereWithoutMessageInput>;

    @Field(() => [MessageReactionScalarWhereInput], {nullable:true})
    @Type(() => MessageReactionScalarWhereInput)
    deleteMany?: Array<MessageReactionScalarWhereInput>;
}
