import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserGroupCreateManyInput } from './user-group-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserGroupArgs {

    @Field(() => [UserGroupCreateManyInput], {nullable:false})
    @Type(() => UserGroupCreateManyInput)
    data!: Array<UserGroupCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
