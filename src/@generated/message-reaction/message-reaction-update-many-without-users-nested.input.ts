import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionCreateWithoutUsersInput } from './message-reaction-create-without-users.input';
import { Type } from 'class-transformer';
import { MessageReactionCreateOrConnectWithoutUsersInput } from './message-reaction-create-or-connect-without-users.input';
import { MessageReactionUpsertWithWhereUniqueWithoutUsersInput } from './message-reaction-upsert-with-where-unique-without-users.input';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';
import { MessageReactionUpdateWithWhereUniqueWithoutUsersInput } from './message-reaction-update-with-where-unique-without-users.input';
import { MessageReactionUpdateManyWithWhereWithoutUsersInput } from './message-reaction-update-many-with-where-without-users.input';
import { MessageReactionScalarWhereInput } from './message-reaction-scalar-where.input';

@InputType()
export class MessageReactionUpdateManyWithoutUsersNestedInput {

    @Field(() => [MessageReactionCreateWithoutUsersInput], {nullable:true})
    @Type(() => MessageReactionCreateWithoutUsersInput)
    create?: Array<MessageReactionCreateWithoutUsersInput>;

    @Field(() => [MessageReactionCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => MessageReactionCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<MessageReactionCreateOrConnectWithoutUsersInput>;

    @Field(() => [MessageReactionUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => MessageReactionUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<MessageReactionUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    set?: Array<MessageReactionWhereUniqueInput>;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    disconnect?: Array<MessageReactionWhereUniqueInput>;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    delete?: Array<MessageReactionWhereUniqueInput>;

    @Field(() => [MessageReactionWhereUniqueInput], {nullable:true})
    @Type(() => MessageReactionWhereUniqueInput)
    connect?: Array<MessageReactionWhereUniqueInput>;

    @Field(() => [MessageReactionUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => MessageReactionUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<MessageReactionUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [MessageReactionUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => MessageReactionUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<MessageReactionUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [MessageReactionScalarWhereInput], {nullable:true})
    @Type(() => MessageReactionScalarWhereInput)
    deleteMany?: Array<MessageReactionScalarWhereInput>;
}
