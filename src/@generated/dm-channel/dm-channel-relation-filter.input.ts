import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelWhereInput } from './dm-channel-where.input';

@InputType()
export class DmChannelRelationFilter {

    @Field(() => DmChannelWhereInput, {nullable:true})
    is?: DmChannelWhereInput;

    @Field(() => DmChannelWhereInput, {nullable:true})
    isNot?: DmChannelWhereInput;
}
