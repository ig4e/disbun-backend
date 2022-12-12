import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserOnGroupUpdateWithoutUserInput } from './user-on-group-update-without-user.input';

@InputType()
export class UserOnGroupUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserOnGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserOnGroupWhereUniqueInput)
    where!: UserOnGroupWhereUniqueInput;

    @Field(() => UserOnGroupUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserOnGroupUpdateWithoutUserInput)
    data!: UserOnGroupUpdateWithoutUserInput;
}
