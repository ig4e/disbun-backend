import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateNestedOneWithoutImageInput } from '../user-group/user-group-create-nested-one-without-image.input';

@InputType()
export class GroupImageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserGroupCreateNestedOneWithoutImageInput, {nullable:false})
    group!: UserGroupCreateNestedOneWithoutImageInput;
}
