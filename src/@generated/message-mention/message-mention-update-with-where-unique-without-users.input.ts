import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { Type } from 'class-transformer';
import { MessageMentionUpdateWithoutUsersInput } from './message-mention-update-without-users.input';

@InputType()
export class MessageMentionUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;

    @Field(() => MessageMentionUpdateWithoutUsersInput, {nullable:false})
    @Type(() => MessageMentionUpdateWithoutUsersInput)
    data!: MessageMentionUpdateWithoutUsersInput;
}
