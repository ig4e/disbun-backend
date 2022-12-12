import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

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

    @HideField()
    groupId?: StringWithAggregatesFilter;

    @HideField()
    userId?: StringWithAggregatesFilter;
}
