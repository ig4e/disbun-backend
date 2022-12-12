import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionCreateManyInput } from '../message-mention/message-mention-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMessageMentionArgs {

    @Field(() => [MessageMentionCreateManyInput], {nullable:false})
    @Type(() => MessageMentionCreateManyInput)
    data!: Array<MessageMentionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
