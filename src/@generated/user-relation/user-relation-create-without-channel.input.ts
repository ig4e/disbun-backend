import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRelationsInput } from '../user/user-create-nested-one-without-relations.input';
import { UserCreateNestedOneWithoutUserRelationsInput } from '../user/user-create-nested-one-without-user-relations.input';
import { RelationStatus } from '../prisma/relation-status.enum';

@InputType()
export class UserRelationCreateWithoutChannelInput {

    @Field(() => UserCreateNestedOneWithoutRelationsInput, {nullable:false})
    relatedUser!: UserCreateNestedOneWithoutRelationsInput;

    @Field(() => UserCreateNestedOneWithoutUserRelationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserRelationsInput;

    @Field(() => RelationStatus, {nullable:true})
    status?: keyof typeof RelationStatus;
}
