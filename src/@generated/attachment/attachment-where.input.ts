import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { MessageRelationFilter } from '../message/message-relation-filter.input';

@InputType()
export class AttachmentWhereInput {

    @Field(() => [AttachmentWhereInput], {nullable:true})
    AND?: Array<AttachmentWhereInput>;

    @Field(() => [AttachmentWhereInput], {nullable:true})
    OR?: Array<AttachmentWhereInput>;

    @Field(() => [AttachmentWhereInput], {nullable:true})
    NOT?: Array<AttachmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fileName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contentType?: StringNullableFilter;

    @Field(() => MessageRelationFilter, {nullable:true})
    message?: MessageRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;
}
