import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageAttatchmentWhereInput } from './message-attatchment-where.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentOrderByWithRelationInput } from './message-attatchment-order-by-with-relation.input';
import { MessageAttatchmentWhereUniqueInput } from './message-attatchment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageAttatchmentScalarFieldEnum } from './message-attatchment-scalar-field.enum';

@ArgsType()
export class FindManyMessageAttatchmentArgs {

    @Field(() => MessageAttatchmentWhereInput, {nullable:true})
    @Type(() => MessageAttatchmentWhereInput)
    where?: MessageAttatchmentWhereInput;

    @Field(() => [MessageAttatchmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageAttatchmentOrderByWithRelationInput>;

    @Field(() => MessageAttatchmentWhereUniqueInput, {nullable:true})
    cursor?: MessageAttatchmentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MessageAttatchmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageAttatchmentScalarFieldEnum>;
}
