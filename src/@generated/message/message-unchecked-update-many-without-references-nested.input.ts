import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutReferencesInput } from './message-create-without-references.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutReferencesInput } from './message-create-or-connect-without-references.input';
import { MessageUpsertWithWhereUniqueWithoutReferencesInput } from './message-upsert-with-where-unique-without-references.input';
import { MessageCreateManyReferencesInputEnvelope } from './message-create-many-references-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutReferencesInput } from './message-update-with-where-unique-without-references.input';
import { MessageUpdateManyWithWhereWithoutReferencesInput } from './message-update-many-with-where-without-references.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUncheckedUpdateManyWithoutReferencesNestedInput {

    @Field(() => [MessageCreateWithoutReferencesInput], {nullable:true})
    @Type(() => MessageCreateWithoutReferencesInput)
    create?: Array<MessageCreateWithoutReferencesInput>;

    @Field(() => [MessageCreateOrConnectWithoutReferencesInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutReferencesInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutReferencesInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutReferencesInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutReferencesInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutReferencesInput>;

    @Field(() => MessageCreateManyReferencesInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyReferencesInputEnvelope)
    createMany?: MessageCreateManyReferencesInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutReferencesInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutReferencesInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutReferencesInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutReferencesInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutReferencesInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutReferencesInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}
