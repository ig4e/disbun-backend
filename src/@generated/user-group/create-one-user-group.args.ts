import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserGroupCreateInput } from './user-group-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserGroupArgs {

    @Field(() => UserGroupCreateInput, {nullable:false})
    @Type(() => UserGroupCreateInput)
    data!: UserGroupCreateInput;
}
