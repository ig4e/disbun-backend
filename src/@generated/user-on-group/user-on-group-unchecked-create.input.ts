import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserOnGroupUncheckedCreateInput {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @Field(() => String, {nullable:false})
    groupId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
