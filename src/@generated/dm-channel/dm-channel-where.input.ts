import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { UserRelationRelationFilter } from '../user-relation/user-relation-relation-filter.input';

@InputType()
export class DmChannelWhereInput {

    @Field(() => [DmChannelWhereInput], {nullable:true})
    AND?: Array<DmChannelWhereInput>;

    @Field(() => [DmChannelWhereInput], {nullable:true})
    OR?: Array<DmChannelWhereInput>;

    @Field(() => [DmChannelWhereInput], {nullable:true})
    NOT?: Array<DmChannelWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => UserRelationRelationFilter, {nullable:true})
    userRelation?: UserRelationRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userRelationRelatedUserId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userRelationUserId?: StringFilter;
}
