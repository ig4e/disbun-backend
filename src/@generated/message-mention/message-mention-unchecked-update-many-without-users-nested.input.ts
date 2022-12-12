import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionCreateWithoutUsersInput } from './message-mention-create-without-users.input';
import { Type } from 'class-transformer';
import { MessageMentionCreateOrConnectWithoutUsersInput } from './message-mention-create-or-connect-without-users.input';
import { MessageMentionUpsertWithWhereUniqueWithoutUsersInput } from './message-mention-upsert-with-where-unique-without-users.input';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { MessageMentionUpdateWithWhereUniqueWithoutUsersInput } from './message-mention-update-with-where-unique-without-users.input';
import { MessageMentionUpdateManyWithWhereWithoutUsersInput } from './message-mention-update-many-with-where-without-users.input';
import { MessageMentionScalarWhereInput } from './message-mention-scalar-where.input';

@InputType()
export class MessageMentionUncheckedUpdateManyWithoutUsersNestedInput {

    @Field(() => [MessageMentionCreateWithoutUsersInput], {nullable:true})
    @Type(() => MessageMentionCreateWithoutUsersInput)
    create?: Array<MessageMentionCreateWithoutUsersInput>;

    @Field(() => [MessageMentionCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => MessageMentionCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<MessageMentionCreateOrConnectWithoutUsersInput>;

    @Field(() => [MessageMentionUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => MessageMentionUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<MessageMentionUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    set?: Array<MessageMentionWhereUniqueInput>;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    disconnect?: Array<MessageMentionWhereUniqueInput>;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    delete?: Array<MessageMentionWhereUniqueInput>;

    @Field(() => [MessageMentionWhereUniqueInput], {nullable:true})
    @Type(() => MessageMentionWhereUniqueInput)
    connect?: Array<MessageMentionWhereUniqueInput>;

    @Field(() => [MessageMentionUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => MessageMentionUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<MessageMentionUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [MessageMentionUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => MessageMentionUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<MessageMentionUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [MessageMentionScalarWhereInput], {nullable:true})
    @Type(() => MessageMentionScalarWhereInput)
    deleteMany?: Array<MessageMentionScalarWhereInput>;
}
