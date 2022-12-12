import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmWhereInput } from './channel-dm-where.input';

@InputType()
export class ChannelDmRelationFilter {

    @Field(() => ChannelDmWhereInput, {nullable:true})
    is?: ChannelDmWhereInput;

    @Field(() => ChannelDmWhereInput, {nullable:true})
    isNot?: ChannelDmWhereInput;
}
