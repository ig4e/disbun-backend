import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserOnGroupCreateWithoutGroupInput } from './user-on-group-create-without-group.input';

@InputType()
export class UserOnGroupCreateOrConnectWithoutGroupInput {

    @Field(() => UserOnGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserOnGroupWhereUniqueInput)
    where!: UserOnGroupWhereUniqueInput;

    @Field(() => UserOnGroupCreateWithoutGroupInput, {nullable:false})
    @Type(() => UserOnGroupCreateWithoutGroupInput)
    create!: UserOnGroupCreateWithoutGroupInput;
}
