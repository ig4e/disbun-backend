import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRelationsInput } from '../user/user-create-nested-one-without-relations.input';
import { UserRelationType } from '../user/user-relation-type.enum';
import { ChannelDmCreateNestedOneWithoutUserRelationsInput } from '../channel-dm/channel-dm-create-nested-one-without-user-relations.input';

@InputType()
export class UserRelationCreateWithoutRelationUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutRelationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRelationsInput;

    @Field(() => UserRelationType, {nullable:true})
    type?: keyof typeof UserRelationType;

    @Field(() => ChannelDmCreateNestedOneWithoutUserRelationsInput, {nullable:false})
    dm!: ChannelDmCreateNestedOneWithoutUserRelationsInput;
}
