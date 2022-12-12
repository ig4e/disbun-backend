import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutReferencesInput } from './message-create-without-references.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutReferencesInput } from './message-create-or-connect-without-references.input';
import { MessageCreateManyReferencesInputEnvelope } from './message-create-many-references-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedManyWithoutReferencesInput {

    @Field(() => [MessageCreateWithoutReferencesInput], {nullable:true})
    @Type(() => MessageCreateWithoutReferencesInput)
    create?: Array<MessageCreateWithoutReferencesInput>;

    @Field(() => [MessageCreateOrConnectWithoutReferencesInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutReferencesInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutReferencesInput>;

    @Field(() => MessageCreateManyReferencesInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyReferencesInputEnvelope)
    createMany?: MessageCreateManyReferencesInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}
