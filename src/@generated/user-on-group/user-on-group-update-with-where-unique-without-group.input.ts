import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserOnGroupUpdateWithoutGroupInput } from './user-on-group-update-without-group.input';

@InputType()
export class UserOnGroupUpdateWithWhereUniqueWithoutGroupInput {

    @Field(() => UserOnGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserOnGroupWhereUniqueInput)
    where!: UserOnGroupWhereUniqueInput;

    @Field(() => UserOnGroupUpdateWithoutGroupInput, {nullable:false})
    @Type(() => UserOnGroupUpdateWithoutGroupInput)
    data!: UserOnGroupUpdateWithoutGroupInput;
}
