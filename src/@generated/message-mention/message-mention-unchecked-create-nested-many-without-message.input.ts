import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionCreateWithoutMessageInput } from './message-mention-create-without-message.input';
import { Type } from 'class-transformer';
import { MessageMentionCreateOrConnectWithoutMessageInput } from './message-mention-create-or-connect-without-message.input';
import { MessageMentionCreateManyMessageInputEnvelope } from './message-mention-create-many-message-input-envelope.input';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';

@InputType()
export class MessageMentionUncheckedCreateNestedManyWithoutMessageInput {

    @Field(() => [MessageMentionCreateWithoutMessageInput], {nullable:true})
    @Type(() => MessageMentionCreateWithoutMessageInput)
    create?: Array<MessageMentionCreateWithoutMessageInput>;

    @Field(() => [MessageMentionCreateOrConnectWithoutMessageInput], {nullable:true})
    @Type(() => MessageMentionCreateOrConnectWithoutMessageInput)
    connectOrCreate?: Array<MessageMentionCreateOrConnectWithoutMessageInput>;

    @Field(() => MessageMentionCreateManyMessageInputEnvelope, {nullable:true})
    @Type(() => MessageMentionCreateManyMessageInputEnvelope)
    createMany?: MessageMentionCreateManyMessageInputEnvelope;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    connect?: Array<MessageMentionWhereUniqueInput>;
}
