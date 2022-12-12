import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';

@ObjectType()
export class ChannelDmMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;
}
