import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DmChannelCount {

    @Field(() => Int, {nullable:false})
    messages?: number;
}
