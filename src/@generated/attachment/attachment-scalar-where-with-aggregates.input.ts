import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class AttachmentScalarWhereWithAggregatesInput {

    @Field(() => [AttachmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AttachmentScalarWhereWithAggregatesInput>;

    @Field(() => [AttachmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AttachmentScalarWhereWithAggregatesInput>;

    @Field(() => [AttachmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AttachmentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileName?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    contentType?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    messageId?: StringWithAggregatesFilter;
}
