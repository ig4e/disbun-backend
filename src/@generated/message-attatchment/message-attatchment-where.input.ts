import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { MessageRelationFilter } from '../message/message-relation-filter.input';

@InputType()
export class MessageAttatchmentWhereInput {

    @Field(() => [MessageAttatchmentWhereInput], {nullable:true})
    AND?: Array<MessageAttatchmentWhereInput>;

    @Field(() => [MessageAttatchmentWhereInput], {nullable:true})
    OR?: Array<MessageAttatchmentWhereInput>;

    @Field(() => [MessageAttatchmentWhereInput], {nullable:true})
    NOT?: Array<MessageAttatchmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fileName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contentType?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    size?: IntFilter;

    @Field(() => MessageRelationFilter, {nullable:true})
    message?: MessageRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;
}
