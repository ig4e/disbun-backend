import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Message } from '../message/message.model';
import { UserRelation } from '../user-relation/user-relation.model';
import { DmChannelCount } from './dm-channel-count.output';

@ObjectType()
export class DmChannel {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => UserRelation, {nullable:false})
    userRelation?: UserRelation;

    @Field(() => String, {nullable:false})
    userRelationRelatedUserId!: string;

    @Field(() => String, {nullable:false})
    userRelationUserId!: string;

    @Field(() => DmChannelCount, {nullable:false})
    _count?: DmChannelCount;
}
