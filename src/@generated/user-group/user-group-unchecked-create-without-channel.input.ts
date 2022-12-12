import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupUncheckedCreateNestedManyWithoutGroupInput } from '../user-on-group/user-on-group-unchecked-create-nested-many-without-group.input';

@InputType()
export class UserGroupUncheckedCreateWithoutChannelInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserOnGroupUncheckedCreateNestedManyWithoutGroupInput, {nullable:true})
    UserOnGroup?: UserOnGroupUncheckedCreateNestedManyWithoutGroupInput;
}
