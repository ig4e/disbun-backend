import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MessageAttatchmentAvgAggregate {

    @Field(() => Float, {nullable:true})
    size?: number;
}
