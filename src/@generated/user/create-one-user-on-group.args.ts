import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserOnGroupCreateInput } from '../user-on-group/user-on-group-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserOnGroupArgs {

    @Field(() => UserOnGroupCreateInput, {nullable:false})
    @Type(() => UserOnGroupCreateInput)
    data!: UserOnGroupCreateInput;
}
