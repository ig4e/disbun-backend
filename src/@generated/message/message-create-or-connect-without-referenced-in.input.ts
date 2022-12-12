import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutReferencedInInput } from './message-create-without-referenced-in.input';

@InputType()
export class MessageCreateOrConnectWithoutReferencedInInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutReferencedInInput, {nullable:false})
    @Type(() => MessageCreateWithoutReferencedInInput)
    create!: MessageCreateWithoutReferencedInInput;
}
