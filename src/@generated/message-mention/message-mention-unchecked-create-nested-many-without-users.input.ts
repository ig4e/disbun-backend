import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionCreateWithoutUsersInput } from './message-mention-create-without-users.input';
import { Type } from 'class-transformer';
import { MessageMentionCreateOrConnectWithoutUsersInput } from './message-mention-create-or-connect-without-users.input';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';

@InputType()
export class MessageMentionUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [MessageMentionCreateWithoutUsersInput], {nullable:true})
    @Type(() => MessageMentionCreateWithoutUsersInput)
    create?: Array<MessageMentionCreateWithoutUsersInput>;

    @Field(() => [MessageMentionCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => MessageMentionCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<MessageMentionCreateOrConnectWithoutUsersInput>;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    connect?: Array<MessageMentionWhereUniqueInput>;
}
