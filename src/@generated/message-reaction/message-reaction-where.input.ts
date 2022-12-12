import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { MessageRelationFilter } from '../message/message-relation-filter.input';

@InputType()
export class MessageReactionWhereInput {

    @Field(() => [MessageReactionWhereInput], {nullable:true})
    AND?: Array<MessageReactionWhereInput>;

    @Field(() => [MessageReactionWhereInput], {nullable:true})
    OR?: Array<MessageReactionWhereInput>;

    @Field(() => [MessageReactionWhereInput], {nullable:true})
    NOT?: Array<MessageReactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    emoji?: StringFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => MessageRelationFilter, {nullable:true})
    message?: MessageRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;
}
