import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MessageAttatchmentScalarWhereWithAggregatesInput {

    @Field(() => [MessageAttatchmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageAttatchmentScalarWhereWithAggregatesInput>;

    @Field(() => [MessageAttatchmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageAttatchmentScalarWhereWithAggregatesInput>;

    @Field(() => [MessageAttatchmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageAttatchmentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileName?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    contentType?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    size?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    messageId?: StringWithAggregatesFilter;
}
