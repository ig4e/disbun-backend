import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutGroupsInput } from '../user/user-create-nested-one-without-groups.input';

@InputType()
export class UserOnGroupCreateWithoutGroupInput {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @Field(() => UserCreateNestedOneWithoutGroupsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutGroupsInput;
}
