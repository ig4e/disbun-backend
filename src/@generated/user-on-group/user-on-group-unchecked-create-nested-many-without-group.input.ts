import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupCreateWithoutGroupInput } from './user-on-group-create-without-group.input';
import { Type } from 'class-transformer';
import { UserOnGroupCreateOrConnectWithoutGroupInput } from './user-on-group-create-or-connect-without-group.input';
import { UserOnGroupCreateManyGroupInputEnvelope } from './user-on-group-create-many-group-input-envelope.input';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';

@InputType()
export class UserOnGroupUncheckedCreateNestedManyWithoutGroupInput {

    @Field(() => [UserOnGroupCreateWithoutGroupInput], {nullable:true})
    @Type(() => UserOnGroupCreateWithoutGroupInput)
    create?: Array<UserOnGroupCreateWithoutGroupInput>;

    @Field(() => [UserOnGroupCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => UserOnGroupCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<UserOnGroupCreateOrConnectWithoutGroupInput>;

    @Field(() => UserOnGroupCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => UserOnGroupCreateManyGroupInputEnvelope)
    createMany?: UserOnGroupCreateManyGroupInputEnvelope;

    @Field(() => [UserOnGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserOnGroupWhereUniqueInput)
    connect?: Array<UserOnGroupWhereUniqueInput>;
}
