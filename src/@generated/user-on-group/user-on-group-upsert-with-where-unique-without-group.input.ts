import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserOnGroupUpdateWithoutGroupInput } from './user-on-group-update-without-group.input';
import { UserOnGroupCreateWithoutGroupInput } from './user-on-group-create-without-group.input';

@InputType()
export class UserOnGroupUpsertWithWhereUniqueWithoutGroupInput {

    @Field(() => UserOnGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserOnGroupWhereUniqueInput)
    where!: UserOnGroupWhereUniqueInput;

    @Field(() => UserOnGroupUpdateWithoutGroupInput, {nullable:false})
    @Type(() => UserOnGroupUpdateWithoutGroupInput)
    update!: UserOnGroupUpdateWithoutGroupInput;

    @Field(() => UserOnGroupCreateWithoutGroupInput, {nullable:false})
    @Type(() => UserOnGroupCreateWithoutGroupInput)
    create!: UserOnGroupCreateWithoutGroupInput;
}
