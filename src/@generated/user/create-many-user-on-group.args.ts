import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserOnGroupCreateManyInput } from '../user-on-group/user-on-group-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserOnGroupArgs {

    @Field(() => [UserOnGroupCreateManyInput], {nullable:false})
    @Type(() => UserOnGroupCreateManyInput)
    data!: Array<UserOnGroupCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
