import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupImageCreateNestedOneWithoutGroupInput } from '../group-image/group-image-create-nested-one-without-group.input';
import { GroupChannelCreateNestedOneWithoutGroupInput } from '../group-channel/group-channel-create-nested-one-without-group.input';

@InputType()
export class UserGroupCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => GroupImageCreateNestedOneWithoutGroupInput, {nullable:true})
    image?: GroupImageCreateNestedOneWithoutGroupInput;

    @Field(() => GroupChannelCreateNestedOneWithoutGroupInput, {nullable:true})
    channel?: GroupChannelCreateNestedOneWithoutGroupInput;
}
