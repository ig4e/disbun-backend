import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelWhereInput } from './group-channel-where.input';
import { Type } from 'class-transformer';
import { GroupChannelOrderByWithRelationInput } from './group-channel-order-by-with-relation.input';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GroupChannelScalarFieldEnum } from './group-channel-scalar-field.enum';

@ArgsType()
export class FindManyGroupChannelArgs {

    @Field(() => GroupChannelWhereInput, {nullable:true})
    @Type(() => GroupChannelWhereInput)
    where?: GroupChannelWhereInput;

    @Field(() => [GroupChannelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GroupChannelOrderByWithRelationInput>;

    @Field(() => GroupChannelWhereUniqueInput, {nullable:true})
    cursor?: GroupChannelWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GroupChannelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GroupChannelScalarFieldEnum>;
}
