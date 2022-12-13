import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Message } from '../message/message.model';
import { UserGroup } from '../user-group/user-group.model';
import { GroupChannelCount } from './group-channel-count.output';

@ObjectType()
export class GroupChannel {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => UserGroup, {nullable:false})
    group?: UserGroup;

    @Field(() => String, {nullable:false})
    userGroupId!: string;

    @Field(() => GroupChannelCount, {nullable:false})
    _count?: GroupChannelCount;
}
