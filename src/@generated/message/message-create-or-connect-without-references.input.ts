import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutReferencesInput } from './message-create-without-references.input';

@InputType()
export class MessageCreateOrConnectWithoutReferencesInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutReferencesInput, {nullable:false})
    @Type(() => MessageCreateWithoutReferencesInput)
    create!: MessageCreateWithoutReferencesInput;
}
