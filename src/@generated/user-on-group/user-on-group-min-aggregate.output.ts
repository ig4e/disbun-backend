import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserOnGroupMinAggregate {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @HideField()
    groupId?: string;

    @HideField()
    userId?: string;
}
