import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupImageUncheckedCreateNestedOneWithoutGroupInput } from '../group-image/group-image-unchecked-create-nested-one-without-group.input';
import { UserOnGroupUncheckedCreateNestedManyWithoutGroupInput } from '../user-on-group/user-on-group-unchecked-create-nested-many-without-group.input';
import { GroupChannelUncheckedCreateNestedOneWithoutGroupInput } from '../group-channel/group-channel-unchecked-create-nested-one-without-group.input';

@InputType()
export class UserGroupUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => GroupImageUncheckedCreateNestedOneWithoutGroupInput, {nullable:true})
    image?: GroupImageUncheckedCreateNestedOneWithoutGroupInput;

    @Field(() => UserOnGroupUncheckedCreateNestedManyWithoutGroupInput, {nullable:true})
    users?: UserOnGroupUncheckedCreateNestedManyWithoutGroupInput;

    @Field(() => GroupChannelUncheckedCreateNestedOneWithoutGroupInput, {nullable:true})
    groupChannel?: GroupChannelUncheckedCreateNestedOneWithoutGroupInput;
}
