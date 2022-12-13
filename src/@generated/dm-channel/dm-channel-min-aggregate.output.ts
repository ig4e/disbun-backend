import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DmChannelMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userRelationRelatedUserId?: string;

    @Field(() => String, {nullable:true})
    userRelationUserId?: string;
}
