import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutReferencesInput } from './message-update-without-references.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutReferencesInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutReferencesInput, {nullable:false})
    @Type(() => MessageUpdateWithoutReferencesInput)
    data!: MessageUpdateWithoutReferencesInput;
}
