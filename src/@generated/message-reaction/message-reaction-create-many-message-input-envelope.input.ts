import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionCreateManyMessageInput } from './message-reaction-create-many-message.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageReactionCreateManyMessageInputEnvelope {

    @Field(() => [MessageReactionCreateManyMessageInput], {nullable:false})
    @Type(() => MessageReactionCreateManyMessageInput)
    data!: Array<MessageReactionCreateManyMessageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
