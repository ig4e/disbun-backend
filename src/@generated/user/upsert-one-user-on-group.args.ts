import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserOnGroupWhereUniqueInput } from '../user-on-group/user-on-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserOnGroupCreateInput } from '../user-on-group/user-on-group-create.input';
import { UserOnGroupUpdateInput } from '../user-on-group/user-on-group-update.input';

@ArgsType()
export class UpsertOneUserOnGroupArgs {

    @Field(() => UserOnGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserOnGroupWhereUniqueInput)
    where!: UserOnGroupWhereUniqueInput;

    @Field(() => UserOnGroupCreateInput, {nullable:false})
    @Type(() => UserOnGroupCreateInput)
    create!: UserOnGroupCreateInput;

    @Field(() => UserOnGroupUpdateInput, {nullable:false})
    @Type(() => UserOnGroupUpdateInput)
    update!: UserOnGroupUpdateInput;
}
