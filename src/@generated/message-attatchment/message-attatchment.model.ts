import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Message } from '../message/message.model';

@ObjectType()
export class MessageAttatchment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => String, {nullable:true})
    contentType!: string | null;

    @Field(() => Int, {nullable:false})
    size!: number;

    @Field(() => Message, {nullable:false})
    message?: Message;

    @Field(() => String, {nullable:false})
    messageId!: string;
}
