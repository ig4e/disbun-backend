import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionUpdateManyMutationInput } from '../message-mention/message-mention-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MessageMentionWhereInput } from '../message-mention/message-mention-where.input';

@ArgsType()
export class UpdateManyMessageMentionArgs {

    @Field(() => MessageMentionUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageMentionUpdateManyMutationInput)
    data!: MessageMentionUpdateManyMutationInput;

    @Field(() => MessageMentionWhereInput, {nullable:true})
    @Type(() => MessageMentionWhereInput)
    where?: MessageMentionWhereInput;
}
