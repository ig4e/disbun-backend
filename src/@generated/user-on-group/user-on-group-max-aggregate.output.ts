import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserOnGroupMaxAggregate {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @Field(() => String, {nullable:true})
    groupId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
