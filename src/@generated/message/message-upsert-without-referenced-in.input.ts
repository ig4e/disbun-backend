import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUpdateWithoutReferencedInInput } from './message-update-without-referenced-in.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutReferencedInInput } from './message-create-without-referenced-in.input';

@InputType()
export class MessageUpsertWithoutReferencedInInput {

    @Field(() => MessageUpdateWithoutReferencedInInput, {nullable:false})
    @Type(() => MessageUpdateWithoutReferencedInInput)
    update!: MessageUpdateWithoutReferencedInInput;

    @Field(() => MessageCreateWithoutReferencedInInput, {nullable:false})
    @Type(() => MessageCreateWithoutReferencedInInput)
    create!: MessageCreateWithoutReferencedInInput;
}
