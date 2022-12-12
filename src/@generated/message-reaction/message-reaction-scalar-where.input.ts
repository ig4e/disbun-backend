import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MessageReactionScalarWhereInput {

    @Field(() => [MessageReactionScalarWhereInput], {nullable:true})
    AND?: Array<MessageReactionScalarWhereInput>;

    @Field(() => [MessageReactionScalarWhereInput], {nullable:true})
    OR?: Array<MessageReactionScalarWhereInput>;

    @Field(() => [MessageReactionScalarWhereInput], {nullable:true})
    NOT?: Array<MessageReactionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    emoji?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;
}
