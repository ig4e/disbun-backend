import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserOnGroupWhereUniqueInput } from '../user-on-group/user-on-group-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserOnGroupArgs {

    @Field(() => UserOnGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserOnGroupWhereUniqueInput)
    where!: UserOnGroupWhereUniqueInput;
}
