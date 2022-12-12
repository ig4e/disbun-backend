import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageAttatchmentUpdateInput } from './message-attatchment-update.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentWhereUniqueInput } from './message-attatchment-where-unique.input';

@ArgsType()
export class UpdateOneMessageAttatchmentArgs {

    @Field(() => MessageAttatchmentUpdateInput, {nullable:false})
    @Type(() => MessageAttatchmentUpdateInput)
    data!: MessageAttatchmentUpdateInput;

    @Field(() => MessageAttatchmentWhereUniqueInput, {nullable:false})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    where!: MessageAttatchmentWhereUniqueInput;
}
