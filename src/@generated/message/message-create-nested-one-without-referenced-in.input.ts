import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutReferencedInInput } from './message-create-without-referenced-in.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutReferencedInInput } from './message-create-or-connect-without-referenced-in.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedOneWithoutReferencedInInput {

    @Field(() => MessageCreateWithoutReferencedInInput, {nullable:true})
    @Type(() => MessageCreateWithoutReferencedInInput)
    create?: MessageCreateWithoutReferencedInInput;

    @Field(() => MessageCreateOrConnectWithoutReferencedInInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutReferencedInInput)
    connectOrCreate?: MessageCreateOrConnectWithoutReferencedInInput;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;
}
