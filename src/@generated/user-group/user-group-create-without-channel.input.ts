import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupCreateNestedManyWithoutGroupInput } from '../user-on-group/user-on-group-create-nested-many-without-group.input';

@InputType()
export class UserGroupCreateWithoutChannelInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserOnGroupCreateNestedManyWithoutGroupInput, {nullable:true})
    UserOnGroup?: UserOnGroupCreateNestedManyWithoutGroupInput;
}
