import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserOnGroupCreateManyUserInput {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @Field(() => String, {nullable:false})
    groupId!: string;
}
