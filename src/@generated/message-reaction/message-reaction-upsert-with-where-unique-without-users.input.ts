import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';
import { Type } from 'class-transformer';
import { MessageReactionUpdateWithoutUsersInput } from './message-reaction-update-without-users.input';
import { MessageReactionCreateWithoutUsersInput } from './message-reaction-create-without-users.input';

@InputType()
export class MessageReactionUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => MessageReactionWhereUniqueInput, {nullable:false})
    @Type(() => MessageReactionWhereUniqueInput)
    where!: MessageReactionWhereUniqueInput;

    @Field(() => MessageReactionUpdateWithoutUsersInput, {nullable:false})
    @Type(() => MessageReactionUpdateWithoutUsersInput)
    update!: MessageReactionUpdateWithoutUsersInput;

    @Field(() => MessageReactionCreateWithoutUsersInput, {nullable:false})
    @Type(() => MessageReactionCreateWithoutUsersInput)
    create!: MessageReactionCreateWithoutUsersInput;
}
