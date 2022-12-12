import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationScalarWhereInput } from './user-relation-scalar-where.input';
import { Type } from 'class-transformer';
import { UserRelationUpdateManyMutationInput } from './user-relation-update-many-mutation.input';

@InputType()
export class UserRelationUpdateManyWithWhereWithoutRelationUserInput {

    @Field(() => UserRelationScalarWhereInput, {nullable:false})
    @Type(() => UserRelationScalarWhereInput)
    where!: UserRelationScalarWhereInput;

    @Field(() => UserRelationUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRelationUpdateManyMutationInput)
    data!: UserRelationUpdateManyMutationInput;
}
