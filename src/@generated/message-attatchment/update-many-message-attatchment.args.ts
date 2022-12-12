import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageAttatchmentUpdateManyMutationInput } from './message-attatchment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentWhereInput } from './message-attatchment-where.input';

@ArgsType()
export class UpdateManyMessageAttatchmentArgs {

    @Field(() => MessageAttatchmentUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageAttatchmentUpdateManyMutationInput)
    data!: MessageAttatchmentUpdateManyMutationInput;

    @Field(() => MessageAttatchmentWhereInput, {nullable:true})
    @Type(() => MessageAttatchmentWhereInput)
    where?: MessageAttatchmentWhereInput;
}
