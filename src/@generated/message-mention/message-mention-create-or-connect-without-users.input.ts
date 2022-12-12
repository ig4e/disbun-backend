import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { Type } from 'class-transformer';
import { MessageMentionCreateWithoutUsersInput } from './message-mention-create-without-users.input';

@InputType()
export class MessageMentionCreateOrConnectWithoutUsersInput {

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;

    @Field(() => MessageMentionCreateWithoutUsersInput, {nullable:false})
    @Type(() => MessageMentionCreateWithoutUsersInput)
    create!: MessageMentionCreateWithoutUsersInput;
}
