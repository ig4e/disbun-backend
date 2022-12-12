import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupChannelWhereInput } from './group-channel-where.input';

@InputType()
export class GroupChannelRelationFilter {

    @Field(() => GroupChannelWhereInput, {nullable:true})
    is?: GroupChannelWhereInput;

    @Field(() => GroupChannelWhereInput, {nullable:true})
    isNot?: GroupChannelWhereInput;
}
