import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupImageUncheckedCreateNestedOneWithoutGroupInput } from '../group-image/group-image-unchecked-create-nested-one-without-group.input';
import { GroupChannelUncheckedCreateNestedOneWithoutGroupInput } from '../group-channel/group-channel-unchecked-create-nested-one-without-group.input';

@InputType()
export class UserGroupUncheckedCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => GroupImageUncheckedCreateNestedOneWithoutGroupInput, {nullable:true})
    image?: GroupImageUncheckedCreateNestedOneWithoutGroupInput;

    @Field(() => GroupChannelUncheckedCreateNestedOneWithoutGroupInput, {nullable:true})
    channel?: GroupChannelUncheckedCreateNestedOneWithoutGroupInput;
}
