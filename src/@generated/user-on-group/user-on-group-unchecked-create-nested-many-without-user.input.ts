import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupCreateWithoutUserInput } from './user-on-group-create-without-user.input';
import { Type } from 'class-transformer';
import { UserOnGroupCreateOrConnectWithoutUserInput } from './user-on-group-create-or-connect-without-user.input';
import { UserOnGroupCreateManyUserInputEnvelope } from './user-on-group-create-many-user-input-envelope.input';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';

@InputType()
export class UserOnGroupUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserOnGroupCreateWithoutUserInput], {nullable:true})
    @Type(() => UserOnGroupCreateWithoutUserInput)
    create?: Array<UserOnGroupCreateWithoutUserInput>;

    @Field(() => [UserOnGroupCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserOnGroupCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserOnGroupCreateOrConnectWithoutUserInput>;

    @Field(() => UserOnGroupCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserOnGroupCreateManyUserInputEnvelope)
    createMany?: UserOnGroupCreateManyUserInputEnvelope;

    @Field(() => [UserOnGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserOnGroupWhereUniqueInput)
    connect?: Array<UserOnGroupWhereUniqueInput>;
}
