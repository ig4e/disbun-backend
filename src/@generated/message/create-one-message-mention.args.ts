import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionCreateInput } from '../message-mention/message-mention-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMessageMentionArgs {

    @Field(() => MessageMentionCreateInput, {nullable:false})
    @Type(() => MessageMentionCreateInput)
    data!: MessageMentionCreateInput;
}
