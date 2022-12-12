import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserOnGroupCreateWithoutUserInput } from './user-on-group-create-without-user.input';

@InputType()
export class UserOnGroupCreateOrConnectWithoutUserInput {

    @Field(() => UserOnGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserOnGroupWhereUniqueInput)
    where!: UserOnGroupWhereUniqueInput;

    @Field(() => UserOnGroupCreateWithoutUserInput, {nullable:false})
    @Type(() => UserOnGroupCreateWithoutUserInput)
    create!: UserOnGroupCreateWithoutUserInput;
}
