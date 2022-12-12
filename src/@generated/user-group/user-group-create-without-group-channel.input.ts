import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupImageCreateNestedOneWithoutGroupInput } from '../group-image/group-image-create-nested-one-without-group.input';
import { UserOnGroupCreateNestedManyWithoutGroupInput } from '../user-on-group/user-on-group-create-nested-many-without-group.input';

@InputType()
export class UserGroupCreateWithoutGroupChannelInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => GroupImageCreateNestedOneWithoutGroupInput, {nullable:true})
    image?: GroupImageCreateNestedOneWithoutGroupInput;

    @Field(() => UserOnGroupCreateNestedManyWithoutGroupInput, {nullable:true})
    users?: UserOnGroupCreateNestedManyWithoutGroupInput;
}
