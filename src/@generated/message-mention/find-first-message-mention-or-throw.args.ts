import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionWhereInput } from './message-mention-where.input';
import { Type } from 'class-transformer';
import { MessageMentionOrderByWithRelationInput } from './message-mention-order-by-with-relation.input';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageMentionScalarFieldEnum } from './message-mention-scalar-field.enum';

@ArgsType()
export class FindFirstMessageMentionOrThrowArgs {

    @Field(() => MessageMentionWhereInput, {nullable:true})
    @Type(() => MessageMentionWhereInput)
    where?: MessageMentionWhereInput;

    @Field(() => [MessageMentionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageMentionOrderByWithRelationInput>;

    @Field(() => MessageMentionWhereUniqueInput, {nullable:true})
    cursor?: MessageMentionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MessageMentionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageMentionScalarFieldEnum>;
}
