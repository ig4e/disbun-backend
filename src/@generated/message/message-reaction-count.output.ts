import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageReactionCount {

    @Field(() => Int, {nullable:false})
    users?: number;
}
