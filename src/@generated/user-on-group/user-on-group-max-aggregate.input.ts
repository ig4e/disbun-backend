import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    owner?: true;

    @HideField()
    groupId?: true;

    @HideField()
    userId?: true;
}
