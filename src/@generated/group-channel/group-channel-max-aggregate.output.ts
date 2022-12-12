import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class GroupChannelMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    userGroupId?: string;
}
