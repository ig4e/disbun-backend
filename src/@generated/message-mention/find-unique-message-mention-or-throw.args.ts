import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMessageMentionOrThrowArgs {

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;
}
