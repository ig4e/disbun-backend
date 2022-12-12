import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { Message } from '../message/message.model';
import { UserRelation } from '../user-relation/user-relation.model';
import { UserGroup } from '../user-group/user-group.model';
import { ChannelDmCount } from './channel-dm-count.output';

@ObjectType()
export class ChannelDm {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => ChannelType, {nullable:false,defaultValue:'DM'})
    type!: keyof typeof ChannelType;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => [UserRelation], {nullable:true})
    UserRelations?: Array<UserRelation>;

    @Field(() => [UserGroup], {nullable:true})
    UserGroups?: Array<UserGroup>;

    @Field(() => ChannelDmCount, {nullable:false})
    _count?: ChannelDmCount;
}
