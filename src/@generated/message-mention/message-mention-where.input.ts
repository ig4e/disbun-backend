import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { MessageRelationFilter } from '../message/message-relation-filter.input';

@InputType()
export class MessageMentionWhereInput {

    @Field(() => [MessageMentionWhereInput], {nullable:true})
    AND?: Array<MessageMentionWhereInput>;

    @Field(() => [MessageMentionWhereInput], {nullable:true})
    OR?: Array<MessageMentionWhereInput>;

    @Field(() => [MessageMentionWhereInput], {nullable:true})
    NOT?: Array<MessageMentionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => MessageRelationFilter, {nullable:true})
    message?: MessageRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;
}
