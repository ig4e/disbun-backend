import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRelationsInput } from '../user/user-create-nested-one-without-relations.input';
import { UserCreateNestedOneWithoutUserRelationsInput } from '../user/user-create-nested-one-without-user-relations.input';
import { UserRelationType } from '../user/user-relation-type.enum';

@InputType()
export class UserRelationCreateWithoutDmInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutRelationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRelationsInput;

    @Field(() => UserCreateNestedOneWithoutUserRelationsInput, {nullable:false})
    relationUser!: UserCreateNestedOneWithoutUserRelationsInput;

    @Field(() => UserRelationType, {nullable:true})
    type?: keyof typeof UserRelationType;
}
