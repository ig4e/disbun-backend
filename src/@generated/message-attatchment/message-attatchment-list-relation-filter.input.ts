import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentWhereInput } from './message-attatchment-where.input';

@InputType()
export class MessageAttatchmentListRelationFilter {

    @Field(() => MessageAttatchmentWhereInput, {nullable:true})
    every?: MessageAttatchmentWhereInput;

    @Field(() => MessageAttatchmentWhereInput, {nullable:true})
    some?: MessageAttatchmentWhereInput;

    @Field(() => MessageAttatchmentWhereInput, {nullable:true})
    none?: MessageAttatchmentWhereInput;
}
