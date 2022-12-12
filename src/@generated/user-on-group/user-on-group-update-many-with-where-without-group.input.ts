import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupScalarWhereInput } from './user-on-group-scalar-where.input';
import { Type } from 'class-transformer';
import { UserOnGroupUpdateManyMutationInput } from './user-on-group-update-many-mutation.input';

@InputType()
export class UserOnGroupUpdateManyWithWhereWithoutGroupInput {

    @Field(() => UserOnGroupScalarWhereInput, {nullable:false})
    @Type(() => UserOnGroupScalarWhereInput)
    where!: UserOnGroupScalarWhereInput;

    @Field(() => UserOnGroupUpdateManyMutationInput, {nullable:false})
    @Type(() => UserOnGroupUpdateManyMutationInput)
    data!: UserOnGroupUpdateManyMutationInput;
}
