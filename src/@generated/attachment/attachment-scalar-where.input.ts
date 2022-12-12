import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AttachmentScalarWhereInput {

    @Field(() => [AttachmentScalarWhereInput], {nullable:true})
    AND?: Array<AttachmentScalarWhereInput>;

    @Field(() => [AttachmentScalarWhereInput], {nullable:true})
    OR?: Array<AttachmentScalarWhereInput>;

    @Field(() => [AttachmentScalarWhereInput], {nullable:true})
    NOT?: Array<AttachmentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fileName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contentType?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;
}
