import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserOnGroupUpdateManyMutationInput } from '../user-on-group/user-on-group-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserOnGroupWhereInput } from '../user-on-group/user-on-group-where.input';

@ArgsType()
export class UpdateManyUserOnGroupArgs {

    @Field(() => UserOnGroupUpdateManyMutationInput, {nullable:false})
    @Type(() => UserOnGroupUpdateManyMutationInput)
    data!: UserOnGroupUpdateManyMutationInput;

    @Field(() => UserOnGroupWhereInput, {nullable:true})
    @Type(() => UserOnGroupWhereInput)
    where?: UserOnGroupWhereInput;
}
