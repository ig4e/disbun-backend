import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DmChannelMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userRelationRelatedUserId?: string;

    @Field(() => String, {nullable:true})
    userRelationUserId?: string;
}
