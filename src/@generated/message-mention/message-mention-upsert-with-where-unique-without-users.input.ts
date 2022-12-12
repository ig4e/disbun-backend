import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { Type } from 'class-transformer';
import { MessageMentionUpdateWithoutUsersInput } from './message-mention-update-without-users.input';
import { MessageMentionCreateWithoutUsersInput } from './message-mention-create-without-users.input';

@InputType()
export class MessageMentionUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;

    @Field(() => MessageMentionUpdateWithoutUsersInput, {nullable:false})
    @Type(() => MessageMentionUpdateWithoutUsersInput)
    update!: MessageMentionUpdateWithoutUsersInput;

    @Field(() => MessageMentionCreateWithoutUsersInput, {nullable:false})
    @Type(() => MessageMentionCreateWithoutUsersInput)
    create!: MessageMentionCreateWithoutUsersInput;
}
