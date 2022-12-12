import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateNestedOneWithoutUsersInput } from '../user-group/user-group-create-nested-one-without-users.input';

@InputType()
export class UserOnGroupCreateWithoutUserInput {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @Field(() => UserGroupCreateNestedOneWithoutUsersInput, {nullable:false})
    group!: UserGroupCreateNestedOneWithoutUsersInput;
}
