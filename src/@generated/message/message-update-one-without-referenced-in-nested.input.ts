import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutReferencedInInput } from './message-create-without-referenced-in.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutReferencedInInput } from './message-create-or-connect-without-referenced-in.input';
import { MessageUpsertWithoutReferencedInInput } from './message-upsert-without-referenced-in.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutReferencedInInput } from './message-update-without-referenced-in.input';

@InputType()
export class MessageUpdateOneWithoutReferencedInNestedInput {

    @Field(() => MessageCreateWithoutReferencedInInput, {nullable:true})
    @Type(() => MessageCreateWithoutReferencedInInput)
    create?: MessageCreateWithoutReferencedInInput;

    @Field(() => MessageCreateOrConnectWithoutReferencedInInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutReferencedInInput)
    connectOrCreate?: MessageCreateOrConnectWithoutReferencedInInput;

    @Field(() => MessageUpsertWithoutReferencedInInput, {nullable:true})
    @Type(() => MessageUpsertWithoutReferencedInInput)
    upsert?: MessageUpsertWithoutReferencedInInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutReferencedInInput, {nullable:true})
    @Type(() => MessageUpdateWithoutReferencedInInput)
    update?: MessageUpdateWithoutReferencedInInput;
}
