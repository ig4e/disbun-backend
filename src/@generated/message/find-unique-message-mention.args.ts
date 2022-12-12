import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionWhereUniqueInput } from '../message-mention/message-mention-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMessageMentionArgs {

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;
}
