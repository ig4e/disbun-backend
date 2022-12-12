import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionCreateWithoutUsersInput } from './message-reaction-create-without-users.input';
import { Type } from 'class-transformer';
import { MessageReactionCreateOrConnectWithoutUsersInput } from './message-reaction-create-or-connect-without-users.input';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';

@InputType()
export class MessageReactionCreateNestedManyWithoutUsersInput {

    @Field(() => [MessageReactionCreateWithoutUsersInput], {nullable:true})
    @Type(() => MessageReactionCreateWithoutUsersInput)
    create?: Array<MessageReactionCreateWithoutUsersInput>;

    @Field(() => [MessageReactionCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => MessageReactionCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<MessageReactionCreateOrConnectWithoutUsersInput>;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    connect?: Array<MessageReactionWhereUniqueInput>;
}
