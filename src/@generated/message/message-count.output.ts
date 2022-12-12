import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageCount {

    @Field(() => Int, {nullable:false})
    attachments?: number;

    @Field(() => Int, {nullable:false})
    reactions?: number;

    @Field(() => Int, {nullable:false})
    referencedIn?: number;
}
