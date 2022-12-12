import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutGroupsInput } from '../user/user-create-nested-one-without-groups.input';
import { UserGroupCreateNestedOneWithoutUsersInput } from '../user-group/user-group-create-nested-one-without-users.input';

@InputType()
export class UserOnGroupCreateInput {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @Field(() => UserCreateNestedOneWithoutGroupsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutGroupsInput;

    @Field(() => UserGroupCreateNestedOneWithoutUsersInput, {nullable:false})
    group!: UserGroupCreateNestedOneWithoutUsersInput;
}
