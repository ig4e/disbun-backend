import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionCreateWithoutMessageInput } from './message-mention-create-without-message.input';
import { Type } from 'class-transformer';
import { MessageMentionCreateOrConnectWithoutMessageInput } from './message-mention-create-or-connect-without-message.input';
import { MessageMentionUpsertWithWhereUniqueWithoutMessageInput } from './message-mention-upsert-with-where-unique-without-message.input';
import { MessageMentionCreateManyMessageInputEnvelope } from './message-mention-create-many-message-input-envelope.input';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { MessageMentionUpdateWithWhereUniqueWithoutMessageInput } from './message-mention-update-with-where-unique-without-message.input';
import { MessageMentionUpdateManyWithWhereWithoutMessageInput } from './message-mention-update-many-with-where-without-message.input';
import { MessageMentionScalarWhereInput } from './message-mention-scalar-where.input';

@InputType()
export class MessageMentionUncheckedUpdateManyWithoutMessageNestedInput {

    @Field(() => [MessageMentionCreateWithoutMessageInput], {nullable:true})
    @Type(() => MessageMentionCreateWithoutMessageInput)
    create?: Array<MessageMentionCreateWithoutMessageInput>;

    @Field(() => [MessageMentionCreateOrConnectWithoutMessageInput], {nullable:true})
    @Type(() => MessageMentionCreateOrConnectWithoutMessageInput)
    connectOrCreate?: Array<MessageMentionCreateOrConnectWithoutMessageInput>;

    @Field(() => [MessageMentionUpsertWithWhereUniqueWithoutMessageInput], {nullable:true})
    @Type(() => MessageMentionUpsertWithWhereUniqueWithoutMessageInput)
    upsert?: Array<MessageMentionUpsertWithWhereUniqueWithoutMessageInput>;

    @Field(() => MessageMentionCreateManyMessageInputEnvelope, {nullable:true})
    @Type(() => MessageMentionCreateManyMessageInputEnvelope)
    createMany?: MessageMentionCreateManyMessageInputEnvelope;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    set?: Array<MessageMentionWhereUniqueInput>;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    disconnect?: Array<MessageMentionWhereUniqueInput>;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    delete?: Array<MessageMentionWhereUniqueInput>;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    connect?: Array<MessageMentionWhereUniqueInput>;

    @Field(() => [MessageMentionUpdateWithWhereUniqueWithoutMessageInput], {nullable:true})
    @Type(() => MessageMentionUpdateWithWhereUniqueWithoutMessageInput)
    update?: Array<MessageMentionUpdateWithWhereUniqueWithoutMessageInput>;

    @Field(() => [MessageMentionUpdateManyWithWhereWithoutMessageInput], {nullable:true})
    @Type(() => MessageMentionUpdateManyWithWhereWithoutMessageInput)
    updateMany?: Array<MessageMentionUpdateManyWithWhereWithoutMessageInput>;

    @Field(() => [MessageMentionScalarWhereInput], {nullable:true})
    @Type(() => MessageMentionScalarWhereInput)
    deleteMany?: Array<MessageMentionScalarWhereInput>;
}
