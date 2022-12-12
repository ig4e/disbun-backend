import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutImageInput } from '../user/user-create-nested-one-without-image.input';

@InputType()
export class UserImageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutImageInput, {nullable:false})
    user!: UserCreateNestedOneWithoutImageInput;
}
