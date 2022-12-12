import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionCreateManyMessageInput } from './message-mention-create-many-message.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageMentionCreateManyMessageInputEnvelope {

    @Field(() => [MessageMentionCreateManyMessageInput], {nullable:false})
    @Type(() => MessageMentionCreateManyMessageInput)
    data!: Array<MessageMentionCreateManyMessageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
