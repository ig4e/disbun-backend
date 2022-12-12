import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupUncheckedCreateNestedManyWithoutGroupInput } from '../user-on-group/user-on-group-unchecked-create-nested-many-without-group.input';
import { GroupChannelUncheckedCreateNestedOneWithoutGroupInput } from '../group-channel/group-channel-unchecked-create-nested-one-without-group.input';

@InputType()
export class UserGroupUncheckedCreateWithoutImageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => UserOnGroupUncheckedCreateNestedManyWithoutGroupInput, {nullable:true})
    users?: UserOnGroupUncheckedCreateNestedManyWithoutGroupInput;

    @Field(() => GroupChannelUncheckedCreateNestedOneWithoutGroupInput, {nullable:true})
    groupChannel?: GroupChannelUncheckedCreateNestedOneWithoutGroupInput;
}
