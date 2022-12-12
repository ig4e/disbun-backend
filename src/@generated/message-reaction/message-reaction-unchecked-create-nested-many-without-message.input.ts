import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionCreateWithoutMessageInput } from './message-reaction-create-without-message.input';
import { Type } from 'class-transformer';
import { MessageReactionCreateOrConnectWithoutMessageInput } from './message-reaction-create-or-connect-without-message.input';
import { MessageReactionCreateManyMessageInputEnvelope } from './message-reaction-create-many-message-input-envelope.input';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';

@InputType()
export class MessageReactionUncheckedCreateNestedManyWithoutMessageInput {

    @Field(() => [MessageReactionCreateWithoutMessageInput], {nullable:true})
    @Type(() => MessageReactionCreateWithoutMessageInput)
    create?: Array<MessageReactionCreateWithoutMessageInput>;

    @Field(() => [MessageReactionCreateOrConnectWithoutMessageInput], {nullable:true})
    @Type(() => MessageReactionCreateOrConnectWithoutMessageInput)
    connectOrCreate?: Array<MessageReactionCreateOrConnectWithoutMessageInput>;

    @Field(() => MessageReactionCreateManyMessageInputEnvelope, {nullable:true})
    @Type(() => MessageReactionCreateManyMessageInputEnvelope)
    createMany?: MessageReactionCreateManyMessageInputEnvelope;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    connect?: Array<MessageReactionWhereUniqueInput>;
}
