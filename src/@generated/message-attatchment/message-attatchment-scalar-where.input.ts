import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MessageAttatchmentScalarWhereInput {

    @Field(() => [MessageAttatchmentScalarWhereInput], {nullable:true})
    AND?: Array<MessageAttatchmentScalarWhereInput>;

    @Field(() => [MessageAttatchmentScalarWhereInput], {nullable:true})
    OR?: Array<MessageAttatchmentScalarWhereInput>;

    @Field(() => [MessageAttatchmentScalarWhereInput], {nullable:true})
    NOT?: Array<MessageAttatchmentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fileName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contentType?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    size?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;
}
