import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MessageMentionScalarWhereInput {

    @Field(() => [MessageMentionScalarWhereInput], {nullable:true})
    AND?: Array<MessageMentionScalarWhereInput>;

    @Field(() => [MessageMentionScalarWhereInput], {nullable:true})
    OR?: Array<MessageMentionScalarWhereInput>;

    @Field(() => [MessageMentionScalarWhereInput], {nullable:true})
    NOT?: Array<MessageMentionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;
}
