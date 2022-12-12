import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MessageScalarWhereInput {

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    AND?: Array<MessageScalarWhereInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    OR?: Array<MessageScalarWhereInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    NOT?: Array<MessageScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    pinned?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refrenceId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    channelId?: StringFilter;

    @HideField()
    groupChannelId?: StringNullableFilter;
}
