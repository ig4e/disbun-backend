import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupCreateNestedManyWithoutGroupInput } from '../user-on-group/user-on-group-create-nested-many-without-group.input';
import { GroupChannelCreateNestedOneWithoutGroupInput } from '../group-channel/group-channel-create-nested-one-without-group.input';

@InputType()
export class UserGroupCreateWithoutImageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => UserOnGroupCreateNestedManyWithoutGroupInput, {nullable:true})
    users?: UserOnGroupCreateNestedManyWithoutGroupInput;

    @Field(() => GroupChannelCreateNestedOneWithoutGroupInput, {nullable:true})
    channel?: GroupChannelCreateNestedOneWithoutGroupInput;
}
