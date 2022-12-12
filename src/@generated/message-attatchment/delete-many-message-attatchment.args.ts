import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageAttatchmentWhereInput } from './message-attatchment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMessageAttatchmentArgs {

    @Field(() => MessageAttatchmentWhereInput, {nullable:true})
    @Type(() => MessageAttatchmentWhereInput)
    where?: MessageAttatchmentWhereInput;
}
