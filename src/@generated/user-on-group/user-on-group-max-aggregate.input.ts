import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserOnGroupMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    owner?: true;

    @Field(() => Boolean, {nullable:true})
    groupId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
