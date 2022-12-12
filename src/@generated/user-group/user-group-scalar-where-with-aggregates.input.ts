import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserGroupScalarWhereWithAggregatesInput {

    @Field(() => [UserGroupScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserGroupScalarWhereWithAggregatesInput>;

    @Field(() => [UserGroupScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserGroupScalarWhereWithAggregatesInput>;

    @Field(() => [UserGroupScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserGroupScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;
}
