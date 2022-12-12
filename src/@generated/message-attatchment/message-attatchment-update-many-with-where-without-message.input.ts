import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentScalarWhereInput } from './message-attatchment-scalar-where.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentUpdateManyMutationInput } from './message-attatchment-update-many-mutation.input';

@InputType()
export class MessageAttatchmentUpdateManyWithWhereWithoutMessageInput {

    @Field(() => MessageAttatchmentScalarWhereInput, {nullable:false})
    @Type(() => MessageAttatchmentScalarWhereInput)
    where!: MessageAttatchmentScalarWhereInput;

    @Field(() => MessageAttatchmentUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageAttatchmentUpdateManyMutationInput)
    data!: MessageAttatchmentUpdateManyMutationInput;
}
