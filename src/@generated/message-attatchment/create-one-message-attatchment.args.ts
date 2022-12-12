import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageAttatchmentCreateInput } from './message-attatchment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMessageAttatchmentArgs {

    @Field(() => MessageAttatchmentCreateInput, {nullable:false})
    @Type(() => MessageAttatchmentCreateInput)
    data!: MessageAttatchmentCreateInput;
}
