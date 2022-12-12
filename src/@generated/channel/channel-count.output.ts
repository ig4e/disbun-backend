import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChannelCount {

    @Field(() => Int, {nullable:false})
    messages?: number;

    @Field(() => Int, {nullable:false})
    UserRelations?: number;

    @Field(() => Int, {nullable:false})
    UserGroups?: number;
}
