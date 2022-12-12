import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionWhereInput } from '../message-mention/message-mention-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMessageMentionArgs {

    @Field(() => MessageMentionWhereInput, {nullable:true})
    @Type(() => MessageMentionWhereInput)
    where?: MessageMentionWhereInput;
}
