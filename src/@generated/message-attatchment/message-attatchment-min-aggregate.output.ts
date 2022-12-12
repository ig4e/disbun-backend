import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageAttatchmentMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    fileName?: string;

    @Field(() => String, {nullable:true})
    contentType?: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => String, {nullable:true})
    messageId?: string;
}
