import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserOnGroupScalarWhereWithAggregatesInput {

    @Field(() => [UserOnGroupScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserOnGroupScalarWhereWithAggregatesInput>;

    @Field(() => [UserOnGroupScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserOnGroupScalarWhereWithAggregatesInput>;

    @Field(() => [UserOnGroupScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserOnGroupScalarWhereWithAggregatesInput>;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    owner?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    groupId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
