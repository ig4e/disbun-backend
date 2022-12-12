import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';
import { Type } from 'class-transformer';
import { MessageReactionCreateWithoutUsersInput } from './message-reaction-create-without-users.input';

@InputType()
export class MessageReactionCreateOrConnectWithoutUsersInput {

    @Field(() => MessageReactionWhereUniqueInput, {nullable:false})
    @Type(() => MessageReactionWhereUniqueInput)
    where!: MessageReactionWhereUniqueInput;

    @Field(() => MessageReactionCreateWithoutUsersInput, {nullable:false})
    @Type(() => MessageReactionCreateWithoutUsersInput)
    create!: MessageReactionCreateWithoutUsersInput;
}
