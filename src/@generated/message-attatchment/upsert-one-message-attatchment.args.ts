import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageAttatchmentWhereUniqueInput } from './message-attatchment-where-unique.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentCreateInput } from './message-attatchment-create.input';
import { MessageAttatchmentUpdateInput } from './message-attatchment-update.input';

@ArgsType()
export class UpsertOneMessageAttatchmentArgs {

    @Field(() => MessageAttatchmentWhereUniqueInput, {nullable:false})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    where!: MessageAttatchmentWhereUniqueInput;

    @Field(() => MessageAttatchmentCreateInput, {nullable:false})
    @Type(() => MessageAttatchmentCreateInput)
    create!: MessageAttatchmentCreateInput;

    @Field(() => MessageAttatchmentUpdateInput, {nullable:false})
    @Type(() => MessageAttatchmentUpdateInput)
    update!: MessageAttatchmentUpdateInput;
}
