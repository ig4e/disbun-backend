import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class DmChannelMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    userRelationRelatedUserId?: string;

    @HideField()
    userRelationUserId?: string;
}
