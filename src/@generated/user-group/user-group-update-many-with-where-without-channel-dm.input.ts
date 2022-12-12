import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupScalarWhereInput } from './user-group-scalar-where.input';
import { Type } from 'class-transformer';
import { UserGroupUpdateManyMutationInput } from './user-group-update-many-mutation.input';

@InputType()
export class UserGroupUpdateManyWithWhereWithoutChannelDmInput {

    @Field(() => UserGroupScalarWhereInput, {nullable:false})
    @Type(() => UserGroupScalarWhereInput)
    where!: UserGroupScalarWhereInput;

    @Field(() => UserGroupUpdateManyMutationInput, {nullable:false})
    @Type(() => UserGroupUpdateManyMutationInput)
    data!: UserGroupUpdateManyMutationInput;
}
