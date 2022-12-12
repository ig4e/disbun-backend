import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserOnGroupUpdateInput } from '../user-on-group/user-on-group-update.input';
import { Type } from 'class-transformer';
import { UserOnGroupWhereUniqueInput } from '../user-on-group/user-on-group-where-unique.input';

@ArgsType()
export class UpdateOneUserOnGroupArgs {

    @Field(() => UserOnGroupUpdateInput, {nullable:false})
    @Type(() => UserOnGroupUpdateInput)
    data!: UserOnGroupUpdateInput;

    @Field(() => UserOnGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserOnGroupWhereUniqueInput)
    where!: UserOnGroupWhereUniqueInput;
}
