import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageAttatchmentWhereUniqueInput } from './message-attatchment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMessageAttatchmentArgs {

    @Field(() => MessageAttatchmentWhereUniqueInput, {nullable:false})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    where!: MessageAttatchmentWhereUniqueInput;
}
