import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserGroupWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
